import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          src: "/videos/salvage1.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "/videos/salvage2.mp4",
        },
         {
          type: "video",
          layout: "portrait",
          src: "/videos/salvage4.mp4",
        },
         {
          type: "video",
          layout: "portrait",
          src: "/videos/salvage5.mp4",
        },


      ]}
    />
  );
}
