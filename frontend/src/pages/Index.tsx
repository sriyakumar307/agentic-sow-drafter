
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { FileText, Settings } from "lucide-react";
import SOWGenerator from "@/components/SOWGenerator";
import ModelConfig from "@/components/ModelConfig";

const Index = () => {
  const [activeTab, setActiveTab] = useState("generator");

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">SOW Generator</h1>
          <p className="text-muted-foreground">
            Generate professional Statements of Work powered by AI
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="generator" className="space-x-2">
              <FileText className="w-4 h-4" />
              <span>Generator</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="space-x-2" disabled>
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-4">
            <Card className="p-6">
              <SOWGenerator />
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="p-6">
              <ModelConfig />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
