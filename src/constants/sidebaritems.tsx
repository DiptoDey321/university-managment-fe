import { MenuProps } from "antd";
import {
  EditOutlined,
  UserOutlined,
  TeamOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const Sidebaritems = (role: string) => {
  // default menu for all
  const defaultSideBarItems: MenuProps["items"] = [
    {
      label: "profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  // common admin menu
  const CommonAdminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: `/${role}/manage-student`,
      icon: <EditOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      key: `/${role}/manage-faculty`,
      icon: <TeamOutlined />,
    },
  ];

  // admin side bar items for ADMIN
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    ...CommonAdminSideBarItems,
    {
      label: "Manage Academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Facultuy</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: (
            <Link href={`/${role}/academic/departments`}>Departments</Link>
          ),
          key: `/${role}/academic/separtments`,
        },
        {
          label: <Link href={`/${role}/academic/semesters`}>Semesters</Link>,
          key: `/${role}/academic/Semesters`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
      ],
    },
  ];

  // Super Admin side bar items for Super Admin
  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    ...CommonAdminSideBarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      key: `/${role}/admin`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/user`}>Manage Users</Link>,
      key: `/${role}/user`,
      icon: <TableOutlined />,
    },
    {
      label: "Manage Permission",
      key: "mamage-permission",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/permission`}>View Permission</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  // sidebar menus items for Faculty
  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
  ];

  // sidebar menu for stduents
  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Courses Schedule</Link>,
      key: `/${role}/courses/schedule`,
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link href={`/${role}/registration`}>registration</Link>,
      key: `/${role}/registration`,
      icon: <ThunderboltOutlined />,
    },
    {
      label: <Link href={`/${role}/paymemt`}>Payment</Link>,
      key: `/${role}/paymemt`,
      icon: <CreditCardOutlined />,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic Report</Link>,
      key: `/${role}/academic-report`,
      icon: <FileTextOutlined />,
    },
  ];

  // menus items selections depending on ROLES
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else defaultSideBarItems;
};
