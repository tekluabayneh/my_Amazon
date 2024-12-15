// menuData.js
export const menuData = {
  menu: [
    {
      title: "Digital Content & Devices",
      items: [
        { label: "Amazon Music", action: "0" },
        { label: "Kindle E-readers & Books", action: "1" },
        { label: "Amazon Appstore", action: "2" },
      ],
    },
    {
      title: "Shop by Department",
      items: [
        { label: "Electronics", action: "3" },
        { label: "Computers", action: "4" },
        { label: "Smart Home", action: "5" },
        { label: "Arts & Crafts", action: "6" },
      ],
    },
    {
      title: "Programs & Features",
      items: [
        { label: "Gift Cards", action: "7" },
        { label: "Shop By Interest", icon: "null", action: null },
        { label: "Amazon Live", action: "8" },
        { label: "International Shopping", action: "9" },
      ],
    },
    {
      title: "Help & Settings",
      items: [
        { label: "Your Account", icon: "null", action: null },
        { label: "English", icon: "null", action: null },
        { label: "United,States", icon: "null", action: null },
        { label: "Customer Service", icon: "null", action: null },
        { label: "Sign in", action: null },
      ],
    },
  ],
};
export const SliderSubContent = {
  menus: [
    {
      ref: 0,
      items: [
        {
          type: "back",
          label: "main menu",
        },
        {
          type: "title",
          label: "Stream Music",
        },
        {
          type: "link",
          label: "Amazon Music Unlimited",
        },
        {
          type: "link",
          label: "Free Streaming Music",
        },
        {
          type: "link",
          label: "Podcasts",
        },
        {
          type: "link",
          label: "Open Web Player",
        },
        {
          type: "link",
          label: "Download the app",
        },
      ],
    },

    {
      ref: 1,
      items: [
        {
          type: "back",
          label: "main menu",
        },
        {
          type: "title",
          label: "Kindle E-readers",
        },
        {
          type: "link",
          label: "Meet the Kindle family",
          href: "/gp/browse.html?node=6669702011&amp;ref_=nav_em__k_ods_eink_maeve_0_2_3_2",
        },
        {
          type: "link",
          label: "New Kindle",
          href: "/dp/B0CNV9F72P?ref_=nav_em__k_ods_eink_ri_0_2_3_3",
        },
        {
          type: "link",
          label: "New Kindle Kids",
          href: "/dp/B0CNVBQK38?ref_=nav_em__k_ods_eink_rikee_0_2_3_4",
        },
        {
          type: "link",
          label: "All-new Kindle Paperwhite",
          href: "/dp/B0CFPJYX7P?ref_=nav_em__k_ods_eink_SA_0_2_3_5",
        },
        {
          type: "link",
          label: "All-new Kindle Paperwhite Kids",
          href: "/dp/B0CFPHTNHV?ref_=nav_em__k_ods_eink_SAkee_0_2_3_6",
        },
        {
          type: "link",
          label: "Introducing Kindle Colorsoft Signature Edition",
          href: "/dp/B0CN3XR57P?ref_=nav_em__k_ods_eink_se_0_2_3_7",
        },
        {
          type: "link",
          label: "New Kindle Scribe",
          href: "/dp/B0CZ9VFQ2P?ref_=nav_em__k_ods_eink_po_0_2_3_8",
        },
        {
          type: "separator",
        },
        {
          type: "title",
          label: "Kindle Store",
        },
        {
          type: "link",
          label: "Kindle Books",
          href: "/gp/browse.html?node=1286228011&amp;ref_=nav_em__ods_eink_con_books_0_2_3_10",
        },
        {
          type: "link",
          label: "Kindle Unlimited",
          href: "/gp/kindle/ku/sign-up/ui/rw/about?ref_=nav_em__ods_eink_con_ku_0_2_3_11",
        },
        {
          type: "link",
          label: "Prime Reading",
          href: "/kindle-dbs/fd/prime-pr?ref_=nav_em__ods_eink_con_pr_0_2_3_12",
        },
        {
          type: "link",
          label: "Kindle Vella",
          href: "/kindle-vella?ref_=nav_em__vla_dt_gw_hm_keb_0_2_3_13",
        },
        {
          type: "separator",
        },
        {
          type: "title",
          label: "Apps & Resources",
        },
        {
          type: "link",
          label: "Free Kindle Reading Apps",
          href: "/kindle-dbs/fd/kcp?ref_=nav_em__ods_eink_con_karl_0_2_3_17_0_2_3_15",
        },
        {
          type: "link",
          label: "Kindle for Web",
          href: "https://read.amazon.com/?ref_=nav_em__ods_eink_con_kcr_0_2_3_16",
        },
        {
          type: "link",
          label: "Manage Your Content and Devices",
          href: "/gp/digital/fiona/manage?ref_=nav_em__ods_eink_con_myk_0_2_3_17",
        },
        {
          type: "link",
          label: "Trade-In",
          href: "/gp/browse.html?node=9187220011&amp;ref_=nav_em__ods_ha_echo_tradein_0_2_3_18",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 2,
      items: [
        {
          type: "back",
          onClick: "setisSubToggled(false); handleClick(liRefs.current[1221]);",
          class: "hmenu-item hmenu-back-button",
          label: "main menu",
        },
        {
          type: "title",
          label: "Amazon Appstore",
        },
        {
          type: "link",
          label: "All Apps and Games",
          href: "/gp/browse.html?node=2350149011&ref_=nav_em__adr_app_0_2_4_2",
        },
        {
          type: "link",
          label: "Fire TV Subscriptions",
          href: "/firetvsubscriptions?ref_=nav_em__adr_ftvsubs_0_2_4_3",
        },
        {
          type: "link",
          label: "Games",
          href: "/gp/browse.html?node=9209902011&ref_=nav_em__adr_gam_0_2_4_4",
        },
        {
          type: "link",
          label: "Amazon Coins",
          href: "/coins?ref_=nav_em__adr_coins_0_2_4_5",
        },
        {
          type: "link",
          label: "Download Amazon Appstore",
          href: "/gp/mas/get/android?ref_=nav_em__adr_dl_0_2_4_6",
        },
        {
          type: "link",
          label: "Amazon Apps",
          href: "/gp/feature.html?docId=1000645111&ref_=nav_em__adr_amz_0_2_4_7",
        },
        {
          type: "link",
          label: "Your Apps and Subscriptions",
          href: "/gp/mas/your-account/myapps?ref_=nav_em__adr_yad_0_2_4_8",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 3,
      items: [
        {
          type: "back",
          onClick: "setisSubToggled(false); handleClick(liRefs.current[1221]);",
          className: "navSubDetail",
          issubToggled: true,
          label: "main menu",
          icon: "arrow_back",
        },
        {
          type: "title",
          label: "Electronics",
        },
        {
          type: "link",
          label: "Accessories & Supplies",
        },
        {
          type: "link",
          label: "Camera & Photo",
        },
        {
          type: "link",
          label: "Car & Vehicle Electronics",
        },
        {
          type: "link",
          label: "Cell Phones & Accessories",
        },
        {
          type: "link",
          label: "Computers & Accessories",
        },
        {
          type: "link",
          label: "GPS & Navigation",
        },
        {
          type: "link",
          label: "Headphones",
        },
        {
          type: "link",
          label: "Home Audio",
        },
        {
          type: "link",
          label: "Office Electronics",
        },
        {
          type: "link",
          label: "Portable Audio & Video",
        },
        {
          type: "link",
          label: "Security & Surveillance",
        },
        {
          type: "link",
          label: "Service Plans",
        },
        {
          type: "link",
          label: "Television & Video",
        },
        {
          type: "link",
          label: "Video Game Consoles & Accessories",
        },
        {
          type: "link",
          label: "Video Projectors",
        },
        {
          type: "link",
          label: "Wearable Technology",
        },
        {
          type: "link",
          label: "eBook Readers & Accessories",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 4,
      items: [
        {
          type: "back",
          className: "navSubDetail",
          issubToggled: true,
          onClick: "setisSubToggled(false); handleClick(liRefs.current[1221]);",
          label: "main menu",
          icon: "arrow_back",
        },
        {
          type: "title",
          label: "Computers",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A172456&ref_=nav_em__nav_desktop_sa_intl_computer_accessories_and_peripherals_0_2_6_2",
          label: "Computer Accessories & Peripherals",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A193870011&ref_=nav_em__nav_desktop_sa_intl_computer_components_0_2_6_3",
          label: "Computer Components",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A13896617011&ref_=nav_em__nav_desktop_sa_intl_computers_tablets_0_2_6_4",
          label: "Computers & Tablets",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A1292110011&ref_=nav_em__nav_desktop_sa_intl_data_storage_0_2_6_5",
          label: "Data Storage",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A3012292011&ref_=nav_em__nav_desktop_sa_intl_external_components_0_2_6_6",
          label: "External Components",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A3011391011&ref_=nav_em__nav_desktop_sa_intl_laptop_accessories_0_2_6_7",
          label: "Laptop Accessories",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A1292115011&ref_=nav_em__nav_desktop_sa_intl_monitors_0_2_6_8",
          label: "Monitors",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A172504&ref_=nav_em__nav_desktop_sa_intl_networking_products_0_2_6_9",
          label: "Networking Products",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A17854127011&ref_=nav_em__nav_desktop_sa_intl_power_strips_and_surge_protectors_0_2_6_10",
          label: "Power Strips & Surge Protectors",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A172635&ref_=nav_em__nav_desktop_sa_intl_printers_0_2_6_11",
          label: "Printers",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A172584&ref_=nav_em__nav_desktop_sa_intl_scanners_0_2_6_12",
          label: "Scanners",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A11036071&ref_=nav_em__nav_desktop_sa_intl_servers_0_2_6_13",
          label: "Servers",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A2348628011&ref_=nav_em__nav_desktop_sa_intl_tablet_accessories_0_2_6_14",
          label: "Tablet Accessories",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A15524379011&ref_=nav_em__nav_desktop_sa_intl_tablet_replacement_parts_0_2_6_15",
          label: "Tablet Replacement Parts",
        },
        {
          type: "link",
          href: "/s?bbn=16225007011&rh=i%3Aspecialty-aps%2Cn%3A16225007011%2Cn%3A16285851&ref_=nav_em__nav_desktop_sa_intl_warranties_and_services_0_2_6_16",
          label: "Warranties & Services",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 5,
      items: [
        {
          className: "navSubDetail",
          type: "back",
          issubToggled: true,
          onClick: "setisSubToggled(false); handleClick(liRefs.current[1221]);",
          label: "main menu",
          icon: "arrow_back",
        },
        {
          type: "title",
          label: "Smart Home",
        },
        {
          type: "link",
          href: "/gp/browse.html?node=2515939011&ref_=nav_em__nav_desktop_sa_intl_smart_home_0_2_7_1",
          label: "Smart Home",
        },
        {
          type: "link",
          href: "/gp/browse.html?node=2972648011&ref_=nav_em__nav_desktop_sa_intl_smart_home_appliances_0_2_7_2",
          label: "Smart Home Appliances",
        },
        {
          type: "link",
          href: "/gp/browse.html?node=16225007011&ref_=nav_em__nav_desktop_sa_intl_smart_home_audio_0_2_7_3",
          label: "Smart Home Audio",
        },
        {
          type: "link",
          href: "/gp/browse.html?node=16225007011&ref_=nav_em__nav_desktop_sa_intl_smart_home_lighting_0_2_7_4",
          label: "Smart Home Lighting",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 6,
      items: [
        {
          className: "hmenu-item hmenu-back-button",
          type: "back",
          ariaLabel: "Back to main menu",
          dataRefTag: "nav_em_1_8_BT_0_main_menu",
          label: "main menu",
          icon: "hmenu-arrow-prev",
          onClick: "setisSubToggled(false); handleClick(liRefs.current[0]);",
        },
        {
          type: "title",
          label: "Arts & Crafts",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A2747968011&ref_=nav_em__nav_desktop_sa_intl_painting_drawing_supplies_0_2_8_2",
          label: "Painting, Drawing & Art Supplies",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12896081&ref_=nav_em__nav_desktop_sa_intl__beading_jewelry_making_0_2_8_3",
          label: "Beading & Jewelry Making",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A378733011&ref_=nav_em__nav_desktop_sa_intl_crafting_0_2_8_4",
          label: "Crafting",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12899121&ref_=nav_em__nav_desktop_sa_intl_fabric_0_2_8_5",
          label: "Fabric",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12896841&ref_=nav_em__nav_desktop_sa_intl_fabric_decorating_0_2_8_6",
          label: "Fabric Decorating",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12897221&ref_=nav_em__nav_desktop_sa_intl_knitting_crochet_0_2_8_7",
          label: "Knitting & Crochet",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A2237329011&ref_=nav_em__nav_desktop_sa_intl_needlework_0_2_8_8",
          label: "Needlework",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A2237594011&ref_=nav_em__nav_desktop_sa_intl_organization_storage_transport_0_2_8_9",
          label: "Organization, Storage & Transport",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12898451&ref_=nav_em__nav_desktop_sa_intl_printmaking_0_2_8_10",
          label: "Printmaking",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12898821&ref_=nav_em__nav_desktop_sa_intl_scrapbookig_stamping_0_2_8_11",
          label: "Scrapbooking & Stamping",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A12899091&ref_=nav_em__nav_desktop_sa_intl_sewing_0_2_8_12",
          label: "Sewing",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A723469011&ref_=nav_em__nav_desktop_sa_intl_party_decorations_supplies_0_2_8_13",
          label: "Party Decorations & Supplies",
        },
        {
          type: "link",
          href: "/s?bbn=4954955011&rh=i%3Aspecialty-aps%2Cn%3A4954955011%2Cn%3A%212617942011%2Cn%3A723452011&ref_=nav_em__nav_desktop_sa_intl_gift_wrapping_supplies_0_2_8_14",
          label: "Gift Wrapping Supplies",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 7,
      items: [
        {
          type: "back",
          label: "main menu",
          icon: "arrow_back",
        },
        {
          type: "title",
          label: "Give a gift card",
        },
        {
          type: "link",
          label: "All gift cards",
        },
        {
          type: "link",
          label: "eGift cards",
        },
        {
          type: "link",
          label: "Gift cards by mail",
        },
        {
          type: "link",
          label: "Specialty gift cards",
        },
        {
          type: "link",
          label: "Amazon Cash",
        },
        {
          type: "link",
          label: "For Businesses",
        },
        {
          type: "separator",
        },
        {
          type: "title",
          label: "Manage your gift card",
        },
        {
          type: "link",
          href: "/gc/redeem?ref_=nav_em_hmc_gc_redeem_0_2_27_9",
          label: "Redeem a gift card",
        },
        {
          type: "link",
          href: "/gp/css/gc/balance?ref_=nav_em_hmc_gc_viewbalance_0_2_27_10",
          label: "View Your Balance",
        },
        {
          type: "link",
          href: "/asv/reload/order?ref_=nav_em_hmc_gc_asv_0_2_27_11",
          label: "Reload Your Balance",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 8,
      items: [
        {
          className: "navSubDetail",
          issubToggled: true,
          type: "back",
          onClick: "setisSubToggled(false); handleClick(liRefs.current[1221]);",
          label: "main menu",
          icon: "arrow_back",
        },
        {
          type: "title",
          label: "Amazon Live",
        },
        {
          type: "link",
          label: "Live",
        },
        {
          type: "link",
          label: "Recently Live",
        },
        {
          type: "separator",
        },
      ],
    },

    {
      ref: 8,
      items: [
        {
          className: "navSubDetail",
          issubToggled: true,
          type: "back",
          onClick: "setisSubToggled(false); handleClick(liRefs.current[1221]);",
          label: "main menu",
          icon: "arrow_back",
        },
        {
          type: "title",
          label: "International Shopping",
        },
        {
          type: "link",
          label: "Where we ship",
        },
        {
          type: "link",
          label: "Visit Amazon Global",
        },
        {
          type: "separator",
        },
      ],
    },
  ],
};
