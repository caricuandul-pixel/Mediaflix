import {
  Radio,
  MonitorPlay,
  Building2,
  CalendarDays,
  Cpu,
  Package,
} from "lucide-react";

export const navItems = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Regions",
    href: "/regions",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const serviceItems = [
  {
    name: "Broadcast Production",
    href: "/services/broadcast-production",
    icon: MonitorPlay,
  },
  {
    name: "Live Streaming",
    href: "/services/live-streaming",
    icon: Radio,
  },
  {
    name: "Studio Production",
    href: "/services/studio-production",
    icon: Building2,
  },
  {
    name: "Event Production",
    href: "/services/event-production",
    icon: CalendarDays,
  },
  {
    name: "Technical Engineering",
    href: "/services/technical-engineering",
    icon: Cpu,
  },
  {
    name: "Broadcast Equipment Rental",
    href: "/services/broadcast-equipment-rental",
    icon: Package,
  },
];