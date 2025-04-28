"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ThermometerSnowflake, 
  Shield, 
  Baby, 
  Droplets, 
  User, 
  Clock, 
  CheckCircle, 
  Plus, 
  Minus,
  ShoppingCart
} from "lucide-react";

const products = [
  {
    id: "adult",
    name: "Adult Cooling Patches",
    description: "Designed for adults with a larger surface area for maximum cooling effect.",
    price: "$19.99",
    pricePerUnit: "$3.33 per patch",
    quantity: "6 patches per box",
    features: [
      "8+ hours of cooling relief",
      "Hypoallergenic adhesive",
      "Extra strength formula",
      "Suitable for all skin types"
    ],
    image: "https://images.pexels.com/photos/5938511/pexels-photo-5938511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <User className="h-5 w-5" />
  },
  {
    id: "children",
    name: "Children's Cooling Patches",
    description: "Specially formulated for children with gentler adhesive and fun designs.",
    price: "$17.99",
    pricePerUnit: "$2.99 per patch",
    quantity: "6 patches per box",
    features: [
      "6+ hours of gentle cooling",
      "Extra-gentle adhesive",
      "Fun animal designs",
      "Fragrance-free formula"
    ],
    image: "https://images.pexels.com/photos/4021811/pexels-photo-4021811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Baby className="h-5 w-5" />
  },
  {
    id: "extra-strength",
    name: "Extra Strength Formula",
    description: "Our most powerful cooling formula for high fevers and maximum relief.",
    price: "$24.99",
    pricePerUnit: "$4.16 per patch",
    quantity: "6 patches per box",
    features: [
      "10+ hours of intense cooling",
      "Maximum strength formula",
      "Medical-grade adhesive",
      "Ideal for high fevers"
    ],
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Droplets className="h-5 w-5" />
  }
];

export function ProductShowcase() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    adult: 1,
    children: 1,
    "extra-strength": 1
  });

  const handleIncrement = (id: string) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.min(prev[id] + 1, 10)
    }));
  };

  const handleDecrement = (id: string) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1)
    }));
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our Cooling Patch Range
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect cooling solution for your needs with our specialized range of products.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="adult" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-blue-100 dark:bg-blue-900/30">
              {products.map((product) => (
                <TabsTrigger 
                  key={product.id} 
                  value={product.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
                >
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <span className="hidden sm:inline">{product.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeInUp} className="relative">
                  <div className="aspect-w-4 aspect-h-3 relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 right-4 bg-white dark:bg-gray-900 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <ThermometerSnowflake className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {product.pricePerUnit} · {product.quantity}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card id="buy" className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Add to Cart</CardTitle>
                      <CardDescription>
                        In stock. Ships within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDecrement(product.id)}
                            disabled={quantities[product.id] <= 1}
                            className="h-9 w-9"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {quantities[product.id]}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleIncrement(product.id)}
                            disabled={quantities[product.id] >= 10}
                            className="h-9 w-9"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment & 30-day money back guarantee</span>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}