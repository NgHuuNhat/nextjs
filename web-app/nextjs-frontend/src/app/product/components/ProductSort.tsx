import { Select } from "antd";
import { ChevronDown } from "lucide-react";

export default function ProductSort() {
  return (
    <div className="">
      <Select
        style={{ width: '100%' }}
        defaultValue="lucy"
        suffixIcon={<ChevronDown className="w-4 h-4 text-gray-400" />}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' }
        ]}
      />
    </div>
  );
}
