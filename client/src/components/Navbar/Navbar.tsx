import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Notifications from "../../Icons/Notification";
import Selected from "../../Icons/Selected";
import Saved from "../../Icons/Saved";
import SearchBar from "../../components/Search/Search";
import Logo from "../../assets/photo_2022-11-15_20-14-18-removebg-preview.6adfd6e9c5796d6ba107.png";

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      <div className="container m-auto px-10 flex">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="" className="h-[70px]" />
          <h6 className="text-[20px] font-medium">Become Different!</h6>
        </div>
        <div className="grow flex items-center">
          <SearchBar />
        </div>
        <div className="min-w-[444px] flex items-center">
          <ul className="w-full h-full flex justify-center">
            <Stack
              direction="row"
              spacing={2}
              className="h-full w-auto flex justify-center items-center mr-2">
              <Notifications />
              <Selected />
              <Saved />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              className="h-full w-auto flex justify-center items-center">
              <Button className="!text-[10px] !text-[#fe004a]">Log In</Button>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              className="h-full w-auto flex justify-center items-center ml-2">
              <Button
                variant="outlined"
                className="!text-[10px] !text-[#fe004a] !border-[#fe004a]">
                Sing Up
              </Button>
            </Stack>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
