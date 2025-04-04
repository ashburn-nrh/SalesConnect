import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Plus } from "lucide-react";

const Deals = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className=" bg-white shadow p-6 h-16">
      <header className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold">Deals</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Show Filters
          </Button>
          <Button variant="outline">
            <Search className="w-4 h-4 mr-2" /> Search deals
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Create deal
          </Button>
        </div>
      </header>
      </div>

      <main className="flex justify-center items-center h-[70vh]">
        <Card className="max-w-md text-center">
          <CardContent className="p-8">
            <div className="flex justify-center">
              <div className="bg-yellow-300 p-4 rounded-full">
                💰
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-4">Let's start winning more deals</h2>
            <p className="text-gray-600 mt-2">
              Create your first deal to start tracking activities, contacts, and conversations in one spot.
            </p>
            <Button className="mt-4">Create deal</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Deals;
