import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Input, Heading, Text } from "../../components";
import MegaMenu1 from "../../components/MegaMenu1";

export default function HomepagePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Artisan Home - Discover Moroccan Artisans & Crafts</title>
        <meta
          name="description"
          content="Explore the Atlas des Artisans platform, your home for discovering the finest Moroccan artisans and their crafts. Find categories, read our blog, or search for unique items."
        />
      </Helmet>

      {/* main content section */}
      <div className="h-[779px] w-full bg-white-A700 bg-[url(/public/images/img_homepage.png)] bg-cover bg-no-repeat pr-[34px] pt-[34px] md:h-auto sm:pr-5 sm:pt-5">
        {/* navigation section */}
        <div className="flex flex-col items-start gap-[212px] md:gap-[159px] sm:gap-[106px]">
          {/* header navigation section */}
          <header className="relative flex w-[88%] items-center justify-between gap-5 self-end pl-[424px] md:w-full md:p-5 md:pl-5 sm:flex-col">
            {/* menu items section */}
            <ul className="flex gap-10 sm:flex-col">
              <li>
                <a href="#" className="self-start">
                  {/* home link section */}
                  <Text as="p">Home</Text>
                </a>
              </li>
              <li
                onMouseLeave={() => {
                  setMenuOpen(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen(true);
                }}
              >
                {/* categories submenu section */}
                <div className="flex cursor-pointer items-center gap-2.5 self-start">
                  {/* categories link section */}
                  <Text as="p">Categories</Text>

                  {/* categories icon section */}
                  <Img src="images/img_vector.svg" alt="vector_one" className="mt-1.5 h-[4px] self-start" />
                </div>
                {menuOpen ? <MegaMenu1 /> : null}
              </li>
              <li>
                <a href="#" className="self-start">
                  {/* contact us link section */}
                  <Text as="p">Contact Us</Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  {/* blog link section */}
                  <Text as="p">Blog</Text>
                </a>
              </li>
            </ul>

            {/* settings and bag section */}
            <div className="flex gap-[29px] self-start">
              {/* settings icon section */}
              <Img src="images/img_settings.svg" alt="settings_one" className="h-[20px]" />

              {/* shopping bag icon section */}
              <Img src="images/img_bag.svg" alt="bag_one" className="h-[20px]" />
            </div>
          </header>

          {/* hero section */}
          <div className="flex w-[58%] flex-col items-center gap-[35px] self-center md:w-full md:p-5">
            {/* hero title section */}
            <Heading as="h1" className="text-center">
              Atlas des Artisans : Une Plateforme pour les Artisans Marocains
            </Heading>

            {/* search bar section */}
            <Input
              name="search"
              placeholder={`Search An Item`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e)}
              suffix={
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gray-900">
                  {searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={14} width={14} />
                  ) : (
                    <Img src="images/img_rewind.svg" alt="rewind" className="h-[14px] w-[14px] cursor-pointer" />
                  )}
                </div>
              }
              className="flex h-[56px] w-[43%] items-center justify-center gap-[35px] rounded-[28px] border border-solid border-white-A700_99 bg-black-900_26 pl-5 pr-2 font-exo text-base text-blue_gray-100"
            />
          </div>

          {/* branding symbol section */}
          <Img src="images/defaultNoData.png" alt="randomsymboles" className="h-[90px] w-[7%]" />
        </div>
      </div>
    </>
  );
}
