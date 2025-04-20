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
    subMenuHeading: ["Company", "Team"],
    subMenu: [
      {
        name: "Company Overview",
        desc: "Overview of our company",
        icon: PanelsTopLeft,
        link: "/companyoverview"
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
        name: "Software Development",
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
      },
      {
        name: "Videography and Photography Support",
        desc: "Excellent videogrph and photograph at your needs",
        icon: MessageCircle,
      },
      {
        name: "VFX and Animation",
        desc: "Developing high end Animation",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];
