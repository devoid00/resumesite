import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage1.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage2.mp4",
        },
         {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage4.mp4",
        },
         {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage5.mp4",
        },


      ]}
    />
  );
}
