import mongoose from "mongoose";

const HomepageSectionSchema = new mongoose.Schema(
  {
    sectionKey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    header: {
      badge: {
        type: String,
        default: "",
        maxlength: 100,
      },

      title: {
        type: String,
        required: true,
        maxlength: 150,
      },

      highlightedText: {
        type: String,
        default: "",
        maxlength: 100,
      },

      description: {
        type: String,
        default: "",
        maxlength: 500,
      },

      align: {
        type: String,
        enum: ["left", "center", "right"],
        default: "center",
      },
    },

    settings: {
      isVisible: {
        type: Boolean,
        default: true,
      },

      showBackground: {
        type: Boolean,
        default: false,
      },

      showDivider: {
        type: Boolean,
        default: false,
      },
    },

    displayOrder: {
      type: Number,
      required: true,
      min: 1,
    },

    seo: {
      title: {
        type: String,
        default: "",
      },

      description: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const HomepageSection =
  mongoose.models.homepage_sections ||
  mongoose.model("homepage_sections", HomepageSectionSchema);

export default HomepageSection;
