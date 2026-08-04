import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    /* ========================================= */
    /* BASIC INFO */
    /* ========================================= */

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    excerpt: {
      type: String,
      required: true,
      maxlength: 320,
    },

    content: {
      type: String,
      required: true,
    },

    /* ========================================= */
    /* CATEGORY */
    /* ========================================= */

    category: {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      slug: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
    },

    /* ========================================= */
    /* THUMBNAIL */
    /* ========================================= */

    thumbnail: {
      url: {
        type: String,
        required: true,
      },

      alt: {
        type: String,
        required: true,
      },
    },

    /* ========================================= */
    /* AUTHOR */
    /* ========================================= */

    author: {
      name: {
        type: String,
        default: "Jahid Munshi",
      },

      avatar: {
        type: String,
        default: "/authors/jahid.jpg",
      },
    },

    /* ========================================= */
    /* BLOG INFO */
    /* ========================================= */

    readTime: {
      type: Number,
      default: 5,
      min: 1,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    /* ========================================= */
    /* SEO */
    /* ========================================= */

    seo: {
      metaTitle: {
        type: String,
        maxlength: 70,
      },

      metaDescription: {
        type: String,
        maxlength: 170,
      },

      keywords: [
        {
          type: String,
          trim: true,
          lowercase: true,
        },
      ],
    },

    /* ========================================= */
    /* STATS */
    /* ========================================= */

    stats: {
      views: {
        type: Number,
        default: 0,
      },

      likes: {
        type: Number,
        default: 0,
      },
    },

    /* ========================================= */
    /* STATUS */
    /* ========================================= */

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },

    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

/* ========================================= */
/* MODEL */
/* ========================================= */

const PostModel = mongoose.models.Posts || mongoose.model("Posts", PostSchema);

export default PostModel;
