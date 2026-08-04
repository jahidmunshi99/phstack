import mongoose from "mongoose";

const SiteSettingSchema = new mongoose.Schema(
  {
    // =========================
    // BASIC SITE INFO
    // =========================
    siteName: {
      type: String,
      required: true,
      trim: true,
      default: "Proghive Publishing",
      minlength: 3,
      maxlength: 150,
    },

    tagline: {
      type: String,
      required: true,
      trim: true,
      default: "Professional Publishing Services",
      minlength: 3,
      maxlength: 250,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default:
        "Professional book formatting, Kindle eBook, paperback, hardcover, EPUB conversion and publishing services.",
    },

    // =========================
    // LOGO & BRANDING
    // =========================
    logo: {
      url: {
        type: String,
        default: "",
      },
      publicId: {
        type: String,
        default: "",
      },
    },

    favicon: {
      url: {
        type: String,
        default: "",
      },
      publicId: {
        type: String,
        default: "",
      },
    },

    // =========================
    // CONTACT INFORMATION
    // =========================
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      default: "support@proghive.com",
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      default: "+8801712413335",
    },

    whatsapp: {
      type: String,
      trim: true,
      default: "+8801712413335",
    },

    // =========================
    // ADDRESS
    // =========================
    address: {
      street: {
        type: String,
        default: "",
      },

      city: {
        type: String,
        default: "",
      },

      state: {
        type: String,
        default: "",
      },

      postalCode: {
        type: String,
        default: "",
      },

      country: {
        type: String,
        default: "Bangladesh",
      },
    },

    // =========================
    // SOCIAL MEDIA
    // =========================
    socialLinks: {
      facebook: {
        type: String,
        default: "",
      },

      linkedin: {
        type: String,
        default: "",
      },

      twitter: {
        type: String,
        default: "",
      },

      youtube: {
        type: String,
        default: "",
      },

      instagram: {
        type: String,
        default: "",
      },

      github: {
        type: String,
        default: "",
      },

      fiverr: {
        type: String,
        default: "",
      },

      upwork: {
        type: String,
        default: "",
      },
    },

    // =========================
    // SEO SETTINGS
    // =========================
    seo: {
      metaTitle: {
        type: String,
        default: "Proghive Publishing",
      },

      metaDescription: {
        type: String,
        default: "Professional Book Formatting and Publishing Services.",
      },

      metaKeywords: {
        type: [String],
        default: [],
      },

      ogImage: {
        type: String,
        default: "",
      },
    },

    // =========================
    // ANALYTICS
    // =========================
    analytics: {
      googleAnalyticsId: {
        type: String,
        default: "",
      },

      googleTagManagerId: {
        type: String,
        default: "",
      },

      facebookPixelId: {
        type: String,
        default: "",
      },
    },

    // =========================
    // BUSINESS SETTINGS
    // =========================
    businessHours: {
      monday: {
        type: String,
        default: "09:00 AM - 06:00 PM",
      },

      tuesday: {
        type: String,
        default: "09:00 AM - 06:00 PM",
      },

      wednesday: {
        type: String,
        default: "09:00 AM - 06:00 PM",
      },

      thursday: {
        type: String,
        default: "09:00 AM - 06:00 PM",
      },

      friday: {
        type: String,
        default: "09:00 AM - 06:00 PM",
      },

      saturday: {
        type: String,
        default: "Closed",
      },

      sunday: {
        type: String,
        default: "Closed",
      },
    },

    // =========================
    // FOOTER
    // =========================
    footer: {
      copyrightText: {
        type: String,
        default: "© 2026 Proghive Publishing. All Rights Reserved.",
      },

      footerDescription: {
        type: String,
        default: "Premium publishing and book formatting services.",
      },
    },

    // =========================
    // SYSTEM SETTINGS
    // =========================
    maintenanceMode: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const SiteSetting =
  mongoose.models.site_settings ||
  mongoose.model("site_settings", SiteSettingSchema);

export default SiteSetting;
