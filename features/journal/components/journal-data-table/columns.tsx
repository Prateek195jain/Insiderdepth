"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface JournalEntry {
  id: string;
  financialInstrument: string;
  entry: number;
  type: "Long" | "Short";
  stopLoss: number;
  takeProfit: number;
  profitLoss: number;
  result: number;
  reasonForEntry: string;
  yourEmotions: string;
  yourConclusion: string;
}

export const JOURNAL_ENTRY_COLUMNS: ColumnDef<JournalEntry>[] = [
  {
    accessorKey: "id",
    header: "My list",
    cell: ({ row }) => (
      <div className="font-medium text-gray-400">
        Trade #{row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "financialInstrument",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent text-gray-400 hover:text-gray-200"
        >
          Financial Instrument
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-semibold text-white">
        {row.getValue("financialInstrument")}
      </div>
    ),
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "entry",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent text-gray-400 hover:text-gray-200"
        >
          Entry
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium text-gray-200">
        {Number(row.getValue("entry")).toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Long/Short",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge
          variant={type === "Long" ? "default" : "secondary"}
          className={
            type === "Long"
              ? "bg-blue-600/80 text-blue-100 hover:bg-blue-600 border-0"
              : "bg-purple-600/80 text-purple-100 hover:bg-purple-600 border-0"
          }
        >
          {type}
        </Badge>
      );
    },
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "stopLoss",
    header: "Stop Loss",
    cell: ({ row }) => (
      <div className="font-medium text-gray-200">
        {Number(row.getValue("stopLoss")).toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "takeProfit",
    header: "Take Profit",
    cell: ({ row }) => (
      <div className="font-medium text-gray-200">
        {Number(row.getValue("takeProfit")).toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "profitLoss",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent text-gray-400 hover:text-gray-200"
        >
          Profit/Loss %
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("profitLoss") as number;
      const isPositive = value >= 0;
      return (
        <div
          className={`font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {value.toFixed(2)}%
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent text-gray-400 hover:text-gray-200"
        >
          Result $
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("result") as number;
      const isPositive = value >= 0;
      return (
        <div
          className={`font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {isPositive ? "$" : "-$"}
          {Math.abs(value).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "reasonForEntry",
    header: "Reason for Entry",
    cell: ({ row }) => (
      <div className="max-w-[200px] truncate text-gray-300">
        {row.getValue("reasonForEntry")}
      </div>
    ),
  },
  {
    accessorKey: "yourEmotions",
    header: "Your Emotions",
    cell: ({ row }) => (
      <div className="text-gray-300">{row.getValue("yourEmotions")}</div>
    ),
  },
  {
    accessorKey: "yourConclusion",
    header: "Your Conclusions",
    cell: ({ row }) => (
      <div className="max-w-[200px] truncate text-gray-300">
        {row.getValue("yourConclusion")}
      </div>
    ),
  },
];
