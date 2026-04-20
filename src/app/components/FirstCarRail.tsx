import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip5.mp4",
        },
       {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip3.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip4.mp4",
        },

        {
          type: "video",
          layout: "portrait",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip2.mp4",
        },
      ]}
    />
  );
}
