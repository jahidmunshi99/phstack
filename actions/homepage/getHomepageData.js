"use server";

import { getAbout } from "../../actions/about/about.js";
import { getContact } from "../../actions/contact/contact.js";
import { getFaqs } from "../../actions/faqs/faq.js";
import { getHero } from "../../actions/hero/hero.js";
import { getHomePageSections } from "../../actions/homepage_sections/homepage_sections.js";
import { getPortfolio } from "../../actions/portfolios/portfolio.js";
import { getPost } from "../../actions/posts/post.js";
import { getServices } from "../../actions/services/services.js";
import { getTestimonials } from "../../actions/testimonials/testimonials.js";
import { getWorkProcess } from "../../actions/workprocess/workprocess.js";

export const getHomepageData = async () => {
  const [
    homepageSections,
    services,
    portfolios,
    workprocess,
    faq,
    testimonials,
    posts,
    hero,
    contact,
  ] = await Promise.all([
    getHomePageSections(),
    getServices(),
    getPortfolio(),
    getWorkProcess(),
    getFaqs(),
    getTestimonials(),
    getPost(),
    getHero(),
    getContact(),
    getAbout(),
  ]);

  const sectionMap = Object.fromEntries(
    homepageSections.map((item) => [item.sectionKey, item]),
  );

  return {
    sections: sectionMap,
    services: {
      config: sectionMap.services,
      data: services,
    },
    portfolios: {
      config: sectionMap.portfolios,
      data: portfolios,
    },
    workprocess: {
      config: sectionMap.workprocess,
      data: workprocess,
    },
    faq: {
      config: sectionMap.faq,
      data: faq,
    },
    testimonials: {
      config: sectionMap.testimonials,
      data: testimonials,
    },
    posts: {
      config: sectionMap.blog,
      data: posts,
    },
    hero: {
      config: sectionMap.hero,
      data: hero,
    },
    contact: {
      config: sectionMap.contact,
      data: contact,
    },
    about: {
      config: sectionMap.about,
      data: contact,
    },
  };
};
