"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterableColumns?: Array<{
    id: string;
    title: string;
    options: Array<{
      label: string;
      value: string;
      icon?: React.ComponentType<{ className?: string }>;
    }>;
  }>;
  searchableColumns?: Array<{
    id: string;
    title: string;
  }>;
}

export function DataTableToolbar<TData>({
  table,
  filterableColumns = [],
  searchableColumns = [],
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const globalFilter = table.getState().globalFilter;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* Global Search */}
        <Input
          placeholder="Search all columns..."
          value={globalFilter ?? ""}
          onChange={(event) =>
            table.setGlobalFilter(String(event.target.value))
          }
          className="h-8 w-[150px] lg:w-[250px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />

        {/* Column-specific searches */}
        {searchableColumns.map((column) => {
          const columnObj = table.getColumn(column.id);
          return columnObj ? (
            <Input
              key={column.id}
              placeholder={`Filter ${column.title}...`}
              value={(columnObj.getFilterValue() as string) ?? ""}
              onChange={(event) => columnObj.setFilterValue(event.target.value)}
              className="h-8 w-[150px] lg:w-[200px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
          ) : null;
        })}

        {/* Faceted filters */}
        {filterableColumns.map((column) => {
          const columnObj = table.getColumn(column.id);
          return columnObj ? (
            <DataTableFacetedFilter
              key={column.id}
              column={columnObj}
              title={column.title}
              options={column.options}
            />
          ) : null;
        })}

        {/* Clear filters */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 text-gray-400 hover:text-white hover:bg-gray-800"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Column visibility */}
      <DataTableViewOptions table={table} />
    </div>
  );
}
