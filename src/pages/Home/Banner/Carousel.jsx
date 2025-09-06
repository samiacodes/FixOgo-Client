"use client";

import { useTranslation } from "react-i18next";
import { Carousel } from "../../../components/ui/carousel";


export function CarouselDemo() {
  const { t } = useTranslation();
  const slideData = [
    {
      title: `🛒 ${t("grocery")}`,
      button: t("order_button"),
      src: "/images/carousel/Grocery.webp",
      link: "/service/grocery",
    },
    {
      title: `🛒 ${t("medicine")}`,
      button: t("order_button"),
      src: "/images/carousel/Medicine.webp",
      link: "/service/grocery",
    },
    {
      title: `🛒 ${t("repair")}`,
      button: t("order_button"),
      src: "/images/carousel/Repair.webp",
      link: "/service/grocery",
    },
    {
      title: `🛒 ${t("cleaning")}`,
      button: t("order_button"),
      src: "/images/carousel/Cleaning.webp",
      link: "/service/grocery",
    },
    {
      title: `🛒 ${t("essential")}`,
      button: t("order_button"),
      src: "/images/carousel/Essential.webp",
      link: "/service/grocery",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{t("title")}</h2>
        <p className="text-gray-600 mt-2">{t("subtitle")}</p>
      </div>
      <Carousel slides={slideData} />
    </div>
  );
}
