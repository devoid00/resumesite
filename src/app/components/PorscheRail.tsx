import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        { src: "/images/first-car/1.jpg" },
        { src: "/images/first-car/2.jpg" },
        { src: "/images/first-car/3.jpg" },
        { src: "/images/first-car/4.jpg" },
        {
          type: "video",
          layout: "portrait",
          src: "",
        },
      ]}
    />
  );
}
