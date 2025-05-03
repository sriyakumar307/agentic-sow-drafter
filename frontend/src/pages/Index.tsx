
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { FileText, Settings } from "lucide-react";
import SOWGenerator from "@/components/SOWGenerator";
import ModelConfig from "@/components/ModelConfig";

const Index = () => {
  const [activeTab, setActiveTab] = useState("generator");

  return (
    <div className="min-h-screen bg-background p-3 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="p-6">
          <h2 className="text-md tracking-tight mb-4 font-medium text-slate-900">
            Generate professional Statements of Work powered by AI
          </h2>
          <SOWGenerator />
        </Card>
      </div>
    </div>
  );
};

export default Index;
