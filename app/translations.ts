export type Language = "en" | "zh";

type Translations = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      ctaQuote: string;
      ctaCall: string;
    };
    trust: {
      hours: string;
      area: string;
      wechat: string;
      honest: string;
    };
    intro: {
      heading: string;
      body: string;
    };
    servicesPreview: {
      heading: string;
      viewAll: string;
      items: { title: string; description: string }[];
    };
    cta: {
      heading: string;
      body: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    callForQuote: string;
    pricingNote: string;
    pricingSubject: string;
    emergencyHeading: string;
    emergencyBody: string;
    services: {
      title: string;
      description: string;
      price?: string;
    }[];
  };
  aboutPage: {
    title: string;
    intro: string;
    storyHeading: string;
    storyBody: string;
    valuesHeading: string;
    values: { title: string; description: string }[];
    areaHeading: string;
    areaBody: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    callHeading: string;
    callButton: string;
    wechatHeading: string;
    wechatBody: string;
    copyButton: string;
    copiedText: string;
    formHeading: string;
    formName: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    areaNote: string;
    formAddress: string;
    formPhotoNote: string;
    formMinWordsError: string;
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    home: {
      hero: {
        title: "Meijia Renovation and Plumbing",
        subtitle: "Reliable, professional plumbing services across Ottawa",
        ctaQuote: "Get a Free Quote",
        ctaCall: "Call Now",
      },
      trust: {
        hours: "Emergency calls until 10 PM",
        area: "Serving all of Ottawa",
        wechat: "Reach us on WeChat",
        honest: "Honest upfront pricing",
      },
      intro: {
        heading: "Trusted Local Plumbing, Done Right",
        body: "With years of hands-on experience, Zeno Yuan provides honest, reliable plumbing services for homes across Ottawa. From small repairs to full installations, every job gets done with care and attention to detail.",
      },
      servicesPreview: {
        heading: "What We Do",
        viewAll: "View All Services",
        items: [
          { title: "Leak Repair", description: "Fast, reliable fixes for leaking pipes and fixtures." },
          { title: "Drain Cleaning", description: "Clearing clogged drains and pipes quickly and safely." },
          { title: "Water Heater Installation", description: "Installation and replacement of water heaters." },
          { title: "Fixture Installation", description: "Sinks, toilets, faucets, and more, installed properly." },
        ],
      },
      cta: {
        heading: "Ready to Get Started?",
        body: "Call or message us today for a free quote — most jobs in the Ottawa area can be scheduled within days.",
        button: "Contact Us",
      },
    },
    footer: {
      tagline: "Serving Barrhaven and the greater Ottawa area",
      rights: "All rights reserved.",
    },
    servicesPage: {
      title: "Our Services",
      subtitle: "Residential and light commercial plumbing across Ottawa — done right, at a fair price.",
      callForQuote: "Call for a Free Estimate: +1 (613) 617-1688",
      pricingNote: "Prices below are starting rates for typical jobs. Every job is different — call Zeno for a more accurate estimate before booking.",
      pricingSubject: "All prices are subject to change depending on the complexity of the job.",
      emergencyHeading: "Emergency Services",
      emergencyBody: "We're available for emergency plumbing calls until 10:00 PM. After-hours calls (after 6:00 PM) will include an additional fee. Don't hesitate to call — we'll do our best to help.",
      services: [
        {
          title: "Drain Services",
          description: "Drain unclogging, cleaning, and general drain maintenance for sinks, tubs, showers, and floor drains.",
          price: "Starting at $130",
        },
        {
          title: "Toilet Installation",
          description: "Installation and replacement of all types of toilets. Complexity and model may affect final price.",
          price: "Starting at $150",
        },
        {
          title: "Faucet Installation",
          description: "Installation and replacement of kitchen and bathroom faucets.",
          price: "Starting at $100",
        },
        {
          title: "Dishwasher Installation",
          description: "Professional dishwasher hookup and installation. Labour only — does not include the appliance.",
          price: "Starting at $120 (labour only)",
        },
        {
          title: "Sink Installation",
          description: "Kitchen and bathroom sink installation and replacement.",
        },
        {
          title: "Laundry Installation",
          description: "Washer and dryer plumbing hookups and laundry room installations.",
        },
        {
          title: "Shut-off Valve Installation",
          description: "Installation and replacement of shut-off valves for sinks, toilets, and other fixtures.",
        },
        {
          title: "Water Heater Mixing Valve",
          description: "Mixing valve installation and replacement for water heaters (electric only — no gas).",
        },
        {
          title: "Basement Plumbing",
          description: "Basement rough-in plumbing, drain installations, and general basement plumbing work.",
        },
        {
          title: "Residential & Light Commercial Rough-In",
          description: "Plumbing rough-in for residential homes and light commercial properties.",
        },
        {
          title: "General Plumbing",
          description: "All kinds of general plumbing repairs and installations. Not sure if we cover your job? Just call — we're happy to help.",
        },
      ],
    },
    aboutPage: {
      title: "About Us",
      intro: "Family-run, hands-on, and committed to doing the job right.",
      storyHeading: "Meet Zeno Yuan",
      storyBody: "Zeno Yuan has been working in plumbing for many years, helping homeowners across Ottawa with everything from small leaks to full installations. 美嘉装修 is a family-run business built on hard work, honesty, and showing up when we say we will.",
      valuesHeading: "Why Choose Us",
      values: [
        { title: "Honest Pricing", description: "No hidden fees — you'll know the cost upfront before any work begins." },
        { title: "Reliable & On Time", description: "We show up when we say we will and get the job done right the first time." },
        { title: "Years of Experience", description: "Decades of hands-on plumbing experience across all kinds of homes." },
        { title: "Friendly Service", description: "We treat every customer's home with respect and care." },
      ],
      areaHeading: "Service Area",
      areaBody: "Based in Barrhaven, 美嘉装修 proudly serves all of Ottawa. Jobs closer to Barrhaven typically cost less, while areas further away (such as Orléans or downtown Ottawa) may include a small travel charge. We occasionally take jobs in Gatineau for an additional fee — contact us to ask.",
    },
    contactPage: {
      title: "Contact Us",
      subtitle: "Get in touch — we usually respond quickly by phone or WeChat.",
      callHeading: "Call or Text",
      callButton: "Call +1 (613) 617-1688",
      wechatHeading: "Message on WeChat",
      wechatBody: "Add us on WeChat using the ID below (same as our phone number).",
      copyButton: "Copy WeChat ID",
      copiedText: "Copied!",
      formHeading: "Or Send Us a Message",
      formName: "Your Name",
      formPhone: "Phone Number",
      formMessage: "Tell us about your plumbing issue",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      formSuccess: "Thanks! We'll get back to you soon.",
      formError: "Something went wrong. Please try calling us instead.",
      areaNote: "Based in Barrhaven, serving all of Ottawa. Pricing may vary by location — areas further from Barrhaven (e.g. Orléans, downtown) may include a small travel fee. Occasional Gatineau jobs available for an additional fee.",
      formAddress: "Service Address",
      formPhotoNote: "After submitting, please text or WeChat a photo of the issue to +1 (613) 617-1688 so we can better understand the problem.",
      formMinWordsError: "Please describe the issue in at least 10 words so we can help you better.",   
    },
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务项目",
      about: "关于我们",
      contact: "联系我们",
    },
    home: {
      hero: {
        title: "美佳装修和水暖",
        subtitle: "渥太华地区可靠、专业的水管维修服务",
        ctaQuote: "免费报价",
        ctaCall: "立即致电",
      },
      trust: {
        hours: "紧急服务至晚上10点",
        area: "服务渥太华全区",
        wechat: "微信随时联系",
        honest: "价格透明诚实",
      },
      intro: {
        heading: "值得信赖的本地水管服务",
        body: "Zeno Yuan 和美嘉装修团队拥有多年实践经验，为渥太华地区的家庭提供诚实可靠的水管维修服务。无论是小修小补还是整体安装，我们都用心对待每一项工作。",
      },
      servicesPreview: {
        heading: "我们的服务",
        viewAll: "查看所有服务",
        items: [
          { title: "漏水维修", description: "快速可靠地修复漏水管道和器具。" },
          { title: "下水道清理", description: "快速安全地清理堵塞的下水道和管道。" },
          { title: "热水器安装", description: "热水器的安装与更换服务。" },
          { title: "卫浴设备安装", description: "水槽、马桶、水龙头等设备的专业安装。" },
        ],
      },
      cta: {
        heading: "准备好开始了吗？",
        body: "今天就致电或留言获取免费报价 — 渥太华地区的大多数工作几天内即可安排。",
        button: "联系我们",
      },
    },
    footer: {
      tagline: "服务于巴尔哈文及大渥太华地区",
      rights: "版权所有。",
    },
    servicesPage: {
      title: "服务项目",
      subtitle: "为渥太华住宅及轻型商业物业提供专业水管服务，价格公道，质量可靠。",
      callForQuote: "免费咨询报价：+1 (613) 617-1688",
      pricingNote: "以下价格为常规工作的起始价格。每项工作情况不同 — 请致电 Zeno 获取更准确的报价。",
      pricingSubject: "所有价格视工作复杂程度而定，可能有所调整。",
      emergencyHeading: "紧急维修服务",
      emergencyBody: "我们提供至晚上10点的紧急上门服务。下午6点后的紧急维修可能需加收额外费用。请随时致电 — 我们会尽力为您提供帮助。",
      services: [
        {
          title: "下水道服务",
          description: "水槽、浴缸、淋浴及地漏的疏通、清洁和日常维护。",
          price: "起价 $130",
        },
        {
          title: "马桶安装",
          description: "各类马桶的安装与更换。最终价格可能因型号和复杂程度而有所不同。",
          price: "起价 $150",
        },
        {
          title: "水龙头安装",
          description: "厨房和浴室水龙头的安装与更换。",
          price: "起价 $100",
        },
        {
          title: "洗碗机安装",
          description: "洗碗机专业接管安装服务（仅含人工，不含电器）。",
          price: "起价 $120（仅人工）",
        },
        {
          title: "水槽安装",
          description: "厨房和浴室水槽的安装与更换。",
        },
        {
          title: "洗衣设备安装",
          description: "洗衣机和烘干机的水管连接及洗衣房安装服务。",
        },
        {
          title: "截止阀安装",
          description: "水槽、马桶及其他装置的截止阀安装与更换。",
        },
        {
          title: "热水器混水阀",
          description: "热水器混水阀的安装与更换（仅限电热水器，不含燃气）。",
        },
        {
          title: "地下室水管",
          description: "地下室预埋管道、排水安装及其他地下室水管工程。",
        },
        {
          title: "住宅及轻型商业预埋管道",
          description: "住宅及轻型商业物业的水管预埋施工服务。",
        },
        {
          title: "综合水管服务",
          description: "各类水管维修和安装服务。不确定是否在服务范围内？欢迎致电咨询 — 我们很乐意为您解答。",
        },
      ],
    },
    aboutPage: {
      title: "关于我们",
      intro: "家庭经营，亲力亲为，致力于把每项工作做好。",
      storyHeading: "认识 Zeno Yuan",
      storyBody: "Zeno Yuan 从事水管维修工作多年，为渥太华地区的房主解决从小型漏水到整体安装的各种问题。美嘉装修是一家家庭经营的企业，以勤奋、诚实和说到做到为根本。",
      valuesHeading: "为什么选择我们",
      values: [
        { title: "价格透明", description: "没有隐藏费用 — 开工前您就会清楚知道价格。" },
        { title: "准时可靠", description: "我们说到做到，第一次就把工作做好。" },
        { title: "多年经验", description: "在各类房屋中积累了数十年的实际维修经验。" },
        { title: "友善服务", description: "我们尊重并细心对待每一位客户的家。" },
      ],
      areaHeading: "服务范围",
      areaBody: "美嘉装修位于巴尔哈文（Barrhaven），服务整个渥太华地区。离巴尔哈文较近的地点收费通常较低，而较远的地区（如奥尔良或渥太华市中心）可能会收取少量交通费。我们偶尔也接加蒂诺（Gatineau）的工作，但需加收额外费用 — 请联系我们咨询。",
    },
    contactPage: {
      title: "联系我们",
      subtitle: "欢迎联系我们 — 我们通常会很快通过电话或微信回复。",
      callHeading: "电话或短信联系",
      callButton: "致电 +1 (613) 617-1688",
      wechatHeading: "微信联系",
      wechatBody: "可通过以下微信号添加我们（与电话号码相同）。",
      copyButton: "复制微信号",
      copiedText: "已复制！",
      formHeading: "或给我们留言",
      formName: "您的姓名",
      formPhone: "电话号码",
      formMessage: "请描述您的水管问题",
      formSubmit: "发送留言",
      formSubmitting: "发送中...",
      formSuccess: "感谢您的留言，我们会尽快回复！",
      formError: "出现错误，请直接致电联系我们。",
      areaNote: "美嘉装修位于巴尔哈文，服务整个渥太华地区。价格可能因地区而异 — 距离巴尔哈文较远的地区（如奥尔良、市中心）可能需加收少量交通费。偶尔也接加蒂诺的工作，但需额外收费。",
      formAddress: "服务地址",
      formPhotoNote: "提交后，请通过短信或微信发送问题照片至 +1 (613) 617-1688，以便我们更好地了解情况。",
      formMinWordsError: "请用至少10个字描述问题，以便我们更好地为您提供帮助。"
    },
  },
};