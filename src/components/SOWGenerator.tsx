
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const SOWGenerator = () => {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Error",
        description: "Please provide a problem statement",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    // TODO: Implement actual AI generation
    setTimeout(() => {
      setGeneratedContent("Sample generated content...");
      setIsGenerating(false);
      toast({
        title: "Success",
        description: "SOW has been generated",
      });
    }, 2000);
  };

  const handleExport = () => {
    // TODO: Implement Word document export
    toast({
      title: "Coming soon",
      description: "Export functionality will be available soon",
    });
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border">
      <ResizablePanel defaultSize={40} minSize={30}>
        <div className="p-6 space-y-6 h-full">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Problem Statement</h2>
            <Textarea
              placeholder="Enter your problem statement and requirements..."
              className="min-h-[200px]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !input.trim()}
              className="w-32"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={60}>
        <div className="p-6 h-full">
          {generatedContent ? (
            <div className="space-y-4 h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Generated SOW</h3>
                <Button variant="outline" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" />
                  Export to Word
                </Button>
              </div>
              <Card className="p-6 h-[calc(100%-4rem)] overflow-auto">
                <div className="prose max-w-none">
                  <p>{generatedContent}</p>
                </div>
              </Card>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Generated content will appear here
            </div>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default SOWGenerator;
