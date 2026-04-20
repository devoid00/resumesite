import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          label:"Full Rewire",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip5.mp4",
        },
       {
          type: "video",
          layout: "portrait",
          label:"Back Seat Restoration",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          label:"Drum to Disk Conversion",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip3.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          label:"Modifying Fuel Pickup",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip4.mp4",
        },

        {
          type: "video",
          layout: "portrait",
          label:"Vinyl Top Installation",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/test-clip2.mp4",
        },
      ]}
    />
  );
}
