import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          src: "/videos/test-clip5.mp4",
        },
       {
          type: "video",
          layout: "portrait",
          src: "/videos/test-clip.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "/videos/test-clip3.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "/videos/test-clip4.mp4",
        },

        {
          type: "video",
          layout: "portrait",
          src: "/videos/test-clip2.mp4",
        },
      ]}
    />
  );
}
