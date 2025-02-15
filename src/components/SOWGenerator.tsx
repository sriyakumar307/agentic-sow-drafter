
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SOWFormData {
  projectObjectives: string;
  projectScope: string;
  servicesDescription: string;
  specificFeatures: string;
  platformsTechnologies: string;
  integrations: string;
  designSpecifications: string;
  outOfScope: string;
  deliverables: string;
  timeline: string;
}

const SOWGenerator = () => {
  const [formData, setFormData] = useState<SOWFormData>({
    projectObjectives: "",
    projectScope: "",
    servicesDescription: "",
    specificFeatures: "",
    platformsTechnologies: "",
    integrations: "",
    designSpecifications: "",
    outOfScope: "",
    deliverables: "",
    timeline: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const handleChange = (field: keyof SOWFormData) => (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleGenerate = async () => {
    if (!formData.projectObjectives.trim()) {
      toast({
        title: "Error",
        description: "Project Objectives is required",
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
        <ScrollArea className="h-full">
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectObjectives" className="text-base font-semibold">
                Project Objectives <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="projectObjectives"
                placeholder="Enter the main objectives of the project..."
                value={formData.projectObjectives}
                onChange={handleChange("projectObjectives")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectScope" className="text-base">Project Scope</Label>
              <Textarea
                id="projectScope"
                placeholder="Define the scope of the project..."
                value={formData.projectScope}
                onChange={handleChange("projectScope")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="servicesDescription" className="text-base">
                Detailed Description of Services
              </Label>
              <Textarea
                id="servicesDescription"
                placeholder="Describe the services to be provided..."
                value={formData.servicesDescription}
                onChange={handleChange("servicesDescription")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specificFeatures" className="text-base">
                Specific Features
              </Label>
              <Textarea
                id="specificFeatures"
                placeholder="List specific features if applicable..."
                value={formData.specificFeatures}
                onChange={handleChange("specificFeatures")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platformsTechnologies" className="text-base">
                Platforms and Technologies
              </Label>
              <Textarea
                id="platformsTechnologies"
                placeholder="Specify platforms and technologies to be used..."
                value={formData.platformsTechnologies}
                onChange={handleChange("platformsTechnologies")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="integrations" className="text-base">Integrations</Label>
              <Textarea
                id="integrations"
                placeholder="List required integrations..."
                value={formData.integrations}
                onChange={handleChange("integrations")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="designSpecifications" className="text-base">
                Design Specifications
              </Label>
              <Textarea
                id="designSpecifications"
                placeholder="Enter design specifications if applicable..."
                value={formData.designSpecifications}
                onChange={handleChange("designSpecifications")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="outOfScope" className="text-base">Out of Scope</Label>
              <Textarea
                id="outOfScope"
                placeholder="Specify what is not included in the scope..."
                value={formData.outOfScope}
                onChange={handleChange("outOfScope")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliverables" className="text-base">Deliverables</Label>
              <Textarea
                id="deliverables"
                placeholder="List specific deliverables, quantities, and formats..."
                value={formData.deliverables}
                onChange={handleChange("deliverables")}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-base">Project Timeline & Schedule</Label>
              <Textarea
                id="timeline"
                placeholder="Outline the project timeline and schedule..."
                value={formData.timeline}
                onChange={handleChange("timeline")}
                className="min-h-[100px]"
              />
            </div>

            <div className="sticky bottom-0 pt-4 bg-background">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !formData.projectObjectives.trim()}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating
                  </>
                ) : (
                  "Generate SOW"
                )}
              </Button>
            </div>
          </div>
        </ScrollArea>
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
