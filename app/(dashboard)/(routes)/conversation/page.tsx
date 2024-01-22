"use client";
import * as z from "zod";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, MessageSquare, Music } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChatCompletionRole } from "openai/resources/index.mjs";
import axios from "axios";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";

interface ChatMessage {
  role: ChatCompletionRole;
  content: string;
  name?: string;
}

export default function ConversationPage() {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("vals: ", values);
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessage = [...messages, userMessage];
      const res = await axios.post("/api/conversation", {
        messages: newMessage,
      });
      console.log("whats comming here: ", res);

      setMessages((current) => [...current, userMessage, res.data]);

      form.reset();
    } catch (w: any) {
      console.log("convo eeee", w);

      if (w?.response?.status === 403) {
        proModal.onOpen();
      }
    } finally {
      router.refresh();
    }
  };

  // const router = useRouter();
  return (
    <div className="mb-8 space-y-4">
      <Heading
        title={"conversation"}
        description={"super duper conversations about your baby"}
        icon={MessageSquare}
        iconColor={"text-violet-500"}
        bgColor={"bg-violet-500/10"}
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        {...field}
                        placeholder="is my baby eating enough?"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className="col-span-12 lg:col-span-2 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader label="loading..." />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="You can ask me anything!" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4"></div>
    </div>
  );
}
