// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import Image from "next/image";
// import FormSection from "@/src/components/shared/form-section";
// import { useParams, useRouter, useSearchParams } from "next/navigation";

// export default function page() {
//   const router = useRouter();
//   // const id = useSearchParams()?.get("id");
//   const params = useParams();
//   const id = params.id;
//   const [postDetails, setPostDetails] = useState(undefined);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const detailId = useMemo(() => {
//     if (!id) return undefined;
//     return id;
//   }, [id]);
//   console.log(detailId, "details");

//   useEffect(() => {
//     async function fetchDetails() {
//       try {
//         setLoading(true);
//         const res = await fetch(
//           // `https://www.hvcproject.com/wp-json/wp/v2/posts?slug=${id}&_embed=true`,
//           `https://www.hvcproject.com/wp-json/wp/v2/posts?slug=${id}`,
//           // "https://www.hvcproject.com/wp-json/wp/v2/posts?per_page=5&_embed=true",

//           {
//             next: { revalidate: 60 },
//           }
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch blog posts");
//         }

//         const fetchedDetails = await res.json();
//         console.log(fetchedDetails, "Prosper");
//         setPostDetails(fetchedDetails);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDetails();
//   }, [id]);
//   console.log(id, "Jaja");

//   return (
//     <main className=" px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex  items-center justify-center bg-white">
//       <section className=" flex flex-col gap-[40px]">
//         <article
//           className=" flex items-center gap-[11px] cursor-pointer "
//           onClick={() => router.back()}
//         >
//           <FaArrowLeftLong color="#141414" />
//           <p className=" font-medium text-[20px] text-[#141414]">Go back</p>
//         </article>

//         <section className=" flex flex-col gap-[53px]">
//           <div className=" flex flex-col gap-[50px]">
//             <article className="flex flex-col gap-[10px]">
//               <h4 className=" text-[#9DC655] text-[20px] font-semibold">
//                 HVC Partners with Kwara State Government to Empower Farmers for
//                 the 2024 Wet Season Farming
//               </h4>

//               <p className=" text-[16px] font-semibold text-[#444444]">
//                 We are pleased to announce our recent partnership with the Kwara
//                 State Government, as we take significant steps toward empowering
//                 local farmers for the 2024 wet season farming.
//               </p>
//             </article>
//             <figure className=" w-full">
//               <Image
//                 src="/news-bg4.png"
//                 width={1280}
//                 height={513}
//                 alt="news 1"
//                 className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
//               />
//             </figure>
//           </div>

//           <div className=" flex flex-col gap-[40px]">
//             <article>
//               <p className=" text-[#444444] font-normal text-[16px]">
//                 The FCT-SAPZ Project is designed to create a dedicated zone for
//                 agro-industrial processing in the Federal Capital Territory
//                 (FCT), offering an integrated approach to agricultural
//                 development. This initiative, spearheaded by the Nigerian
//                 government, aims to attract private sector investments, create
//                 jobs, and enhance the value chain in Nigeria’s agricultural
//                 sector. During the expo, Harvest Value Chain Limited (HVC),
//                 represented by the CEO,{" "}
//                 <span className=" text-[16px] font-semibold text-[#444444]">
//                   Mr. Charles Adetola
//                 </span>
//                   had the privilege of discussing the project in detail with{" "}
//                 <span className=" text-[16px] font-semibold text-[#444444]">
//                   Mr. Omale Adebisi Olateju,
//                 </span>
//                   the Monitoring and Evaluation Officer for the FCT-SAPZ
//                 Project, and{" "}
//                 <span className=" text-[16px] font-semibold text-[#444444]">
//                   Mr. Aliyu Mustapha Shaba,
//                 </span>
//                   the Investment Officer. Their insights shed light on the
//                 significant opportunities this project presents.
//               </p>
//             </article>

//             <article className=" flex flex-col gap-[16px]">
//               {/* <h4 className=" font-semibold text-[20px] text-[#141414]">
//                 Opportunities for Local Agro Companies
//               </h4> */}
//               <article>
//                 <p className=" text-[#444444] font-normal text-[16px]">
//                   On a working visit to farm cluster groups in Edu Local
//                   Government Area, the Honorable State Commissioner for
//                   Agriculture and Rural Development, Mrs. Oloruntoyosi Thomas,
//                   underscored the state government’s dedication to working with
//                   real farmers to ensure food self-sufficiency and expand the
//                   revenue generation capacity of Kwara State. This partnership
//                   aligns perfectly with HVC’s mission to transform agriculture
//                   through innovation, sustainability, and community engagement.
//                 </p>
//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   Harvest Value Chain Limited had the honor of accompanying Mrs.
//                   Thomas and her team from the Ministry of Agriculture.
//                   Together, we conducted a verification mission for the farmers
//                   captured for the upcoming wet season farming. This
//                   verification process is crucial, as it ensures that only
//                   genuine farmers receive the necessary support and
//                   interventions needed to maximize their productivity.
//                 </p>

//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   Our approach at HVC begins with the meticulous collection of
//                   farmer data, including names, BVNs (Bank Verification
//                   Numbers), and phone numbers. This data forms the foundation of
//                   our work, enabling us to provide targeted support where it is
//                   most needed. The current phase involves tagging each farmer to
//                   their specific farmland, which ensures that our interventions
//                   are directly aligned with their individual farming operations.
//                 </p>

//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   We appreciate the Kwara State Government for entrusting HVC
//                   with this critical role. This collaboration not only
//                   strengthens our bond with the local farming communities but
//                   also reinforces our commitment to driving agricultural
//                   excellence across the state.
//                 </p>

//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   The response from the farmers has been overwhelmingly
//                   positive. Mrs. Aminat Mahmud, speaking on behalf of the
//                   farmers in Yelwa village, Tsaragi Ward II, also expressed deep
//                   gratitude to the state government for the support extended to
//                   real farmers like herself. It is this kind of feedback that
//                   motivates us to continue our work with passion and dedication.
//                 </p>

//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   As we look forward to the 2024 wet season, we are confident
//                   that our partnership with the Kwara State Government will
//                   yield significant results, contributing to the overall food
//                   security and economic prosperity of the region. We remain
//                   committed to ensuring that every farmer involved in this
//                   program receives the support they need to succeed.
//                 </p>

//                 <p className="text-[#444444] font-semibold text-[16px] pt-2">
//                   At HVC, we believe that by working together with government
//                   bodies and local communities, we can create a more sustainable
//                   and productive agricultural sector. This partnership is just
//                   one of many steps we are taking to achieve that goal.
//                 </p>

//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   Stay tuned to our blog for more updates on this project and
//                   other initiatives that HVC is involved in. Together, we can
//                   transform agriculture for the better.
//                 </p>
//                 <p className="text-[#444444] font-normal text-[16px] pt-2">
//                   Tagged{" "}
//                   <span className=" underline cursor-pointer text-red-600 text-[16px]">
//                     Community Impact Government Partnership
//                   </span>
//                 </p>
//               </article>
//             </article>

//             {/* myform */}
//             <FormSection />
//           </div>
//         </section>
//       </section>
//     </main>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import FormSection from "@/src/components/shared/form-section";
import { useParams, useRouter, useSearchParams } from "next/navigation";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media?: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export default function page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [postDetails, setPostDetails] = useState<WordPressPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const detailId = useMemo(() => {
    if (!id) return undefined;
    return id;
  }, [id]);
  console.log(detailId, "details");

  const processContent = (content: any) => {
    if (!content) return "";

    // Replace relative image URLs with absolute URLs
    return content
      .replace(
        /src="\/wp-content\//g,
        'src="https://www.hvcproject.com/wp-content/'
      )
      .replace(
        /src="wp-content\//g,
        'src="https://www.hvcproject.com/wp-content/'
      );
  };

  useEffect(() => {
    async function fetchDetails() {
      if (!id) return;

      try {
        setLoading(true);
        const res = await fetch(
          `https://www.hvcproject.com/wp-json/wp/v2/posts?slug=${id}&_embed=true`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const fetchedDetails = await res.json();
        console.log(fetchedDetails, "Prosper");

        if (!fetchedDetails || fetchedDetails.length === 0) {
          throw new Error("Post not found");
        }

        setPostDetails(fetchedDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
  }, [id]);

  useEffect(() => {
    if (postDetails?.[0]?.content?.rendered) {
      // Log the content to see the actual URLs
      console.log("Content in production:", postDetails[0].content.rendered);

      // Extract and test image URLs
      const imgRegex = /<img[^>]+src="([^"]+)"/g;
      let match;

      while (
        (match = imgRegex.exec(postDetails[0].content.rendered)) !== null
      ) {
        const imageUrl = match[1];
        console.log("Testing image URL:", imageUrl);

        // Test if the image is accessible
        fetch(imageUrl, { method: "HEAD" })
          .then((response) => {
            console.log(`Image ${imageUrl} status:`, response.status);
          })
          .catch((error) => {
            console.error(`Image ${imageUrl} failed:`, error);
          });
      }
    }
  }, [postDetails]);

  if (loading) {
    return (
      <main className="px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex items-center justify-center bg-white">
        <div className="text-lg text-gray-600">Loading post...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex items-center justify-center bg-white">
        <div className="text-lg text-red-600">Error: {error}</div>
      </main>
    );
  }

  return (
    <main className="px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex items-center justify-center bg-white">
      <section className="flex flex-col gap-[40px]">
        <article
          className="flex items-center gap-[11px] cursor-pointer"
          onClick={() => router.back()}
        >
          <FaArrowLeftLong color="#141414" />
          <p className="font-medium text-[20px] text-[#141414]">Go back</p>
        </article>

        <section className="flex flex-col gap-[53px]">
          <div className="flex flex-col gap-[50px]">
            <article className="flex flex-col gap-[10px]">
              <h4 className="text-[#9DC655] text-[20px] font-semibold">
                {postDetails?.[0]?.title?.rendered || " "}
              </h4>

              <p className="text-[16px] font-semibold text-[#444444]">
                {postDetails?.[0]?.excerpt?.rendered
                  ? postDetails[0].excerpt.rendered
                      .replace(/<[^>]*>/g, "")
                      .trim()
                  : " "}
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-[40px]">
            <article>
              {/* <div
                className="text-[#444444] font-normal text-[16px] prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html: postDetails?.[0]?.content?.rendered || "",
                }}
              /> */}
              <div
                className="text-[#444444] font-normal text-[16px] prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    processContent(postDetails?.[0]?.content?.rendered) || "",
                }}
              />
            </article>

            <FormSection />
          </div>
        </section>
      </section>
    </main>
  );
}
