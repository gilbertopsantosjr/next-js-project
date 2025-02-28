"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SavedItem } from "@/app/types";

export default function SavedItems() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // This would be replaced with actual data from your backend
  const mockSavedItems: SavedItem[] = [
    {
      id: "1",
      title: "10 Tips for Remote Work Success",
      url: "https://linkedin.com/post/1",
      type: "article",
      categories: ["Remote Work", "Career Tips"],
      dateAdded: "2024-03-20",
      dateModified: "2024-03-20",
    },
    {
      id: "2",
      title: "The Future of Web Development",
      url: "https://linkedin.com/post/2",
      type: "post",
      categories: ["Web Development", "Technology"],
      dateAdded: "2024-03-19",
      dateModified: "2024-03-19",
    },
    {
      id: "3",
      title: "Building Scalable Systems",
      url: "https://linkedin.com/post/3",
      type: "article",
      categories: ["Technology", "System Design"],
      dateAdded: "2024-03-18",
      dateModified: "2024-03-18",
    },
  ];

  // Extract unique categories from all items
  const allCategories = Array.from(
    new Set(mockSavedItems.flatMap((item) => item.categories))
  ).sort();

  // Filter items based on search and category
  const filteredItems = mockSavedItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-col sm:flex-row">
        <Input
          placeholder="Search saved items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-sm"
        />
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="sm:w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {allCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="hover:bg-accent/50 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              <Badge>{item.type}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className={
                        category === selectedCategory
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Added on {new Date(item.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No items found matching your criteria
        </div>
      )}
    </div>
  );
}