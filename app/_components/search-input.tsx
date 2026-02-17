import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        className="border-border rounded-full"
        placeholder="Pesquise serviços ou barbearias"
      ></Input>
      <Button
        variant={"default"}
        size="icon"
        className="border-border rounded-full"
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
