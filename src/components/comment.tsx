"use client";
import { useEffect, useRef, useState } from "react";
import {
  addComment,
  getComment,
  GetCommentResponse,
  WalineRootComment,
  WalineComment,
} from "@waline/api";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface WalineCommentProps {
  postPath: string;
}

const CustomWalineComment = ({ postPath }: WalineCommentProps) => {
  const WALINE_SERVER_URL =
    "https://waline-git-main-xmchxups-projects.vercel.app/";
  const [comments, setComments] = useState<GetCommentResponse>();
  const formRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [title, setTitle] = useState<string>("Send comment");
  const [rootID, setRootID] = useState<string>("");
  const [replyID, setReplyID] = useState<string>("");
  const [replyUser, setReplyUser] = useState<string>("");

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const resp = await getComment({
          serverURL: WALINE_SERVER_URL,
          path: postPath,
          page: 1,
          pageSize: 10,
          sortBy: "insertedAt_desc",
          lang: navigator.language,
        });
        setComments(resp);
      } catch (error) {
        console.error("Failed to fetch comment count:", error);
      }
    };

    fetchComment();
  }, [postPath]);

  const handleReset = () => {
    setContent("");
    setName("");
    setEmail("");
    setLink("");
    setRootID("");
    setReplyID("");
    setReplyUser("");
  };

  const handleSubmitComment = async () => {
    const resp = await addComment({
      serverURL: WALINE_SERVER_URL,
      lang: navigator.language,
      comment: {
        link,
        mail: email,
        nick: name,
        comment: content,
        ua: navigator.userAgent,
        url: postPath,
        recaptchaV3: "6Ld1hFIqAAAAAMgMDfg8r7eEF6vFi5e548R6DlyS",
        rid: rootID ?? null,
        pid: replyID ?? null,
        at: replyUser ?? null,
      },
    });
    console.log(resp);
  };

  const handleReplyTo = (comment: WalineComment) => {
    const findRootComment = (currentComment: WalineComment): WalineComment => {
      if (!isWalineRootComment(currentComment)) {
        const parentComment = comments?.data.find(
          (c) => c.objectId === currentComment.pid
        );
        return parentComment ? findRootComment(parentComment) : currentComment;
      }
      return currentComment;
    };
    const rootComment = findRootComment(comment);
    console.log(rootComment.objectId, comment.nick, comment.objectId);
    setRootID(rootComment.objectId);
    setReplyUser(comment.nick);
    setReplyID(comment.objectId);
    setTitle(`Reply #${comment.objectId}`);

    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isWalineRootComment = (
    comment: WalineComment
  ): comment is WalineRootComment => {
    return (comment as WalineRootComment).children !== undefined;
  };

  const renderComment = (
    comment: WalineComment,
    isChild?: boolean
  ): JSX.Element => {
    const identPx = isChild ? 32 : 0;
    return (
      <div key={`comment-${comment.objectId}`}>
        <div
          className="flex flex-row gap-4 items-start"
          style={{ marginLeft: `${identPx}px` }}
        >
          {/* Avatar */}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="py-1"
            href={comment.link}
          >
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              {comment.avatar ? (
                <Image
                  className="aspect-square h-full w-full"
                  src={comment.avatar}
                  alt={comment.nick}
                  width={40}
                  height={40}
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  {comment.nick.charAt(0)}
                </span>
              )}
            </span>
          </Link>

          <div className="flex flex-col gap-1 flex-grow">
            <div className="flex flex-row gap-2 items-center justify-between w-full">
              <div className="inline-flex flex-row gap-2 items-center">
                <div className="text-sm font-bold">{comment.nick}</div>
                <div className="text-sm text-secondary-foreground">
                  {new Date(comment.time).toLocaleString()}
                </div>
              </div>
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {comment.addr}
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {comment.os}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-start w-full">
              <div className="text-sm flex-grow">
                <div className="prose prose-slate dark:prose-invert w-full style_article__6VkBw">
                  <div
                    className="text-sm font-normal"
                    dangerouslySetInnerHTML={{ __html: comment.comment }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-4 items-center justify-between">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-sm font-normal"
                  data-state="closed"
                  onClick={() => handleReplyTo(comment)}
                >
                  <Icons.commentSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Only render 2 level comment */}
        {isWalineRootComment(comment) &&
          comment.children.map(
            (child) =>
              child.pid == comment.objectId && renderComment(child, true)
          )}
      </div>
    );
  };

  return (
    <>
      <div className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow print:hidden">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">
            Comments ({comments?.count})
          </h3>
        </div>

        <div className="p-6 pt-0 flex flex-col gap-4">
          {comments?.data.map((comment) => renderComment(comment))}
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full my-4"
        ></div>
      </div>

      {/* SendComment */}
      <div
        ref={formRef}
        className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow print:hidden"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
        </div>
        <div className="p-6 pt-0">
          <form className="grid grid-cols-2 gap-4">
            <div className="space-y-2 col-span-2">
              <Textarea
                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                placeholder="Comments"
                name="comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <p className="text-[0.8rem] text-muted-foreground">
                Markdown supported. Please keep comments clean.
              </p>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <Label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="form-name-item"
              >
                Name *
              </Label>
              <Input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="form-name-item"
                name="nick"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <Label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="form-email-item"
              >
                Email / QQ *
              </Label>
              <Input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required
                id="form-email-item"
                name="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="form-link-item"
              >
                Link
              </Label>
              <Input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="form-link-item"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="p-6 pt-0 flex flex-row items-center gap-4 justify-end">
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            type="submit"
            onClick={handleSubmitComment}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CustomWalineComment;
