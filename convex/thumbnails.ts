import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createThumbnail = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("Unauthorized");
    }
    await ctx.db.insert("thumbnails", {
      title: args.title,
      userId: user.subject,
    });
  },
});

export const getThumbnailsForUser = query({
  handler: async (ctx, args) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    args = {};
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("Unauthorized");
    }
    return await ctx.db
      .query("thumbnails")
      .filter((q) => q.eq(q.field("userId"), user.subject))
      .collect();
  },
});
