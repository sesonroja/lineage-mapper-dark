import { LineageGraph } from "@/components/LineageGraph";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-semibold text-white">Data Lineage Visualization</h1>
      </header>
      <main className="h-[calc(100vh-73px)]">
        <LineageGraph />
      </main>
    </div>
  );
};

export default Index;