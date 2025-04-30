import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "About",
    /* subMenuHeading: ["Company", "Team"], */
    subMenu: [
      {
        name: "About Us",
        desc: "Overview of our company",
        icon: PanelsTopLeft,
        link: "/aboutus"
      },
      {
        name: "Mission & Vision",
        desc: "MIssion & Vision",
        icon: Bolt,
        link: "/missionvision"
      },
      {
        name: "Team",
        desc: "Details of our team",
        icon: PanelTop,
        link: "/team"
      },
      {
        name: "Concern",
        desc: "Our Concern",
        icon: Database,
        link: "/ourconcern"
      },
    ],
    gridCols: 2,
  },
  {
    name: "IT Services",
    subMenu: [
      {
        name: "Web Development",
        desc: "Dynamic Super Fast Web Apps",
        icon: ShoppingBag,
        link: "/webdevelop"

      },
      {
        name: "ERP Development",
        desc: "Custom Software Develop across all platforms",
        icon: ShoppingBag,
        link: "/softwaredevelop"
      },
      {
        name: "Mobile Application Development",
        desc: "Software within yours palms",
        icon: MapPin,
        link: "/appdevelop"
      },
      {
        name: "Digital Marketing Services",
        desc: "Developing high end Animation",
        icon: TriangleAlert,
        link: "/digitalmarketing"

      },
    ],
    gridCols: 2,
  },
  {
    name: "Creative Services",
    subMenu: [
      {
        name: "Graphical Solutions",
        desc: "View and learn about our graphical solutions",
        icon: CircleHelp,
        link: "/graphicalsolutions"

      },
      {
        name: "Videography and Photography Support",
        desc: "Excellent videogrph and photograph at your needs",
        icon: MessageCircle,
        link: "/videographyphotography"

      },
      {
        name: "VFX and Animation",
        desc: "Developing high end Animation",
        icon: TriangleAlert,
        link: "/vfxanimation"
      },
    ],
    gridCols: 1,
  },
  {
    name: "Our Products",
    subMenu: [
      {
        name: "Hospital Management",
        desc: "Manage Hospital from our ERP",
        icon: CircleHelp,
        link: "/hospitalmanagement"
      },
      {
        name: "Jail Management",
        desc: "Manage Jail Prisoners from our high end ERP Solution",
        icon: MessageCircle,
        link: "/jailmanagement"
      }
      /* {
        name: "POS",
        desc: "Manage and monitor your store from our Point of Sales ERP",
        icon: TriangleAlert,
      },
      {
        name: "HR Management",
        desc: "Manage your company's HR through our ERP system",
        icon: TriangleAlert,
      }, */
    ],
    gridCols: 1,
  },
  {
    name: "Gallery",
    link: "/underdevelopment"

  },
  {
    name: "Contact",
    link: "/underdevelopment"

  },
];
