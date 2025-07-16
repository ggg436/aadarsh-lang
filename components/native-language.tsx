"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import { getLesson } from "@/db/queries";
import { useLanguageStore } from "@/store/useLanguageStore";
import { redirect } from "next/navigation";
// import { useEffect } from "react";

export const LangugeChoose = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const handleSelect = (lang: string) => {
    console.log("this is your choosen language right?", lang);
    // redirect(`/${lang}/learn`);
    setLanguage(lang);
  };

  //
  // useEffect(() => {
  //   (async () => {
  //     const languageData = await getLesson();
  //   })();
  // });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Native Language
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="bg-white border border-green-300 rounded shadow-md p-2"
        sideOffset={5}
      >
        <DropdownMenu.Item
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleSelect("en")}
        >
          English
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleSelect("nep")}
        >
          Nepali
        </DropdownMenu.Item>
        {/* <DropdownMenu.Separator className="h-px my-1 bg-gray-200" /> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
