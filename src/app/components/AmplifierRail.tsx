import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          src: "/videos/amps1.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "/videos/amps2.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "/videos/amps3.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "/videos/amps4.mp4",
        },
        { src: "/images/IMG_2315.jpg" },
      ]}
    />
  );
}
