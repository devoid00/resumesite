import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          label:"Initial Damage",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage1.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          label:"Various Photos from Restoration",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage2.mp4",
        },
         {
          type: "video",
          layout: "portrait",
          label:"Finished Product",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage4.mp4",
        },
         {
          type: "video",
          layout: "portrait",
          label:"Having Fun With The Car",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/salvage5.mp4",
        },
       {
          type: "video",
          layout: "portrait",
          label:"Some Of My Favorite Cars I've Worked On Professionally",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/favoritecars.mp4",
        },


      ]}
    />
  );
}
