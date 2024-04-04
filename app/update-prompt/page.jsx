import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/dist/client/router";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  // Fetching data from the API based on the searchParams
  useEffect(() => {
    const fetchData = async () => {
      // Extracting the id from searchParams
      const promptId = searchParams.get("id");
      
      if (promptId) {
        try {
          const response = await fetch(`/api/prompt/${promptId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch prompt details");
          }
          const data = await response.json();
          setPost({
            prompt: data.prompt,
            tag: data.tag,
          });
        } catch (error) {
          console.error("Error fetching prompt details:", error);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [searchParams]);

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Extracting the id from searchParams
    const promptId = searchParams.get("id");

    if (!promptId) {
      alert("Missing PromptId!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to update prompt:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating prompt:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render loading state if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
