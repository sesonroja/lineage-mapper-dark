import { LineageGraph } from "@/components/LineageGraph";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-semibold">Data Lineage Visualization</h1>
      </header>
      <main className="container mx-auto py-6">
        <LineageGraph />
      </main>
    </div>
  );
};

export default Index;