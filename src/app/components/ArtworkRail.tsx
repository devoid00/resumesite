import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
         {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/shoes.mp4",
        },
      ]}
    />
  );
}
