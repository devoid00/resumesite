import StoryRail from "./StoryRail";

export default function PhonesRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          src: "/videos/phone.mp4",
        },
        { src: "/images/phones/IMG_3869.jpg" },
        { src: "/images/phones/IMG_3870.jpg" },
        { src: "/images/phones/IMG_3871.jpg" },
        { src: "/images/phones/IMG_3872.jpg" },
        { src: "/images/phones/IMG_3874.jpg" },
        { src: "/images/phones/IMG_3875.jpg" },

      ]}
    />
  );
}
