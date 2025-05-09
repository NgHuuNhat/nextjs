import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductSort() {
  return (
    <Select defaultValue="all">
      <SelectTrigger
        className="w-full lg:w-[180px] cursor-pointer outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
        // style={{ outline: "none", boxShadow: "none" }}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all" className="cursor-pointer">All</SelectItem>
          <SelectItem value="iphone" className="cursor-pointer">Iphone</SelectItem>
          <SelectItem value="ipad" className="cursor-pointer">Ipad</SelectItem>
          <SelectItem value="macbook" className="cursor-pointer">Macbook</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
