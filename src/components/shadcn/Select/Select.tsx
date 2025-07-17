import { Select as SelectComponent, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../ui/select";


function Select() {
  return (
    <SelectComponent>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </SelectComponent>
  );
}

export default Select;
