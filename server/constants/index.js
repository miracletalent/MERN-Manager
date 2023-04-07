const defaultElements = [
  {
    id: "dashboard",
    elementTitle: "Dashboard",
    elementParent: null,
    navLink: "/dashboard/analytics",
  },
  {
    id: "organizations",
    elementTitle: "Organizations",
    elementParent: null,
    navLink: "/organizations",
  },
  {
    id: "contacts",
    elementTitle: "Contacts",
    elementParent: null,
    navLink: "/contacts",
  },
  {
    id: "contacts/client",
    elementTitle: "Clients",
    elementParent: "contacts",
    navLink: "/contacts/clients/list",
  },
  {
    id: "contacts/employee",
    elementTitle: "Employee",
    elementParent: "contacts",
    navLink: "/contacts/employee/list",
  },
  {
    id: "contacts/leads",
    elementTitle: "Leads",
    elementParent: "contacts",
    navLink: "/contacts/leads/list",
  },
  {
    id: "contacts/relationships",
    elementTitle: "Relationships",
    elementParent: "contacts",
    navLink: "/contacts/relationship/list",
  },
  {
    id: "contacts/vendor",
    elementTitle: "Vendor",
    elementParent: "contacts",
    navLink: "/contacts/vendor/list",
  },
  {
    id: "contacts/members",
    elementTitle: "Members",
    elementParent: "contacts",
    navLink: "/contacts/members/list",
  },
  {
    id: "tasks/tasks",
    elementTitle: "Tasks & Goals",
    elementParent: 'tasksAndGoals',
    navLink: "/tasksAndGoals",
  },
  {
    id: "tasksAndGoals",
    elementTitle: "Tasks & Goals",
    elementParent: null,
    navLink: "/tasksAndGoals",
  },
  {
    id: "calendar",
    elementTitle: "Calendar",
    elementParent: null,
    navLink: "/calendar",
  },
  {
    id: "documents",
    elementTitle: "Documents",
    elementParent: null,
    navLink: "/documents",
  },
  {
    id: "marketing",
    elementTitle: "Marketing",
    elementParent: null,
    navLink: "/marketing",
  },
  {
    id: "marketing/automation",
    elementTitle: "Marketing",
    elementParent: 'marketing',
    navLink: "/marketing",
  },
  {
    id: "marketing/email",
    elementTitle: "Marketing",
    elementParent: 'marketing',
    navLink: "/marketing",
  },
  {
    id: "marketing/text",
    elementTitle: "Marketing",
    elementParent: 'marketing',
    navLink: "/marketing",
  },
  {
    id: "marketing/chat",
    elementTitle: "Marketing",
    elementParent: 'marketing',
    navLink: "/marketing",
  },
  {
    id: "marketing/socialConnect",
    elementTitle: "Marketing",
    elementParent: 'marketing',
    navLink: "/marketing",
  },
  {
    id: "marketing/reputation",
    elementTitle: "Marketing",
    elementParent: 'marketing',
    navLink: "/marketing",
  },
  {
    id: "mysocial",
    elementTitle: "My Social",
    elementParent: null,
    navLink: "/mysocial",
  },
  {
    id: "mysocial",
    elementTitle: "My Social",
    elementParent: null,
    navLink: "/mysocial",
  },
  {
    id: "socialconnect/socialconnect",
    elementTitle: "Social Connect",
    elementParent: "mysocial",
    navLink: "/mysocial/socialconnect",
  },
  {
    id: "socialconnect/socialproof",
    elementTitle: "Social Connect",
    elementParent: "mysocial",
    navLink: "/mysocial/socialconnect",
  },
  {
    id: "socialconnect/reputation",
    elementTitle: "Social Connect",
    elementParent: "mysocial",
    navLink: "/mysocial/socialconnect",
  },
  {
    id: "socialproof",
    elementTitle: "Social Proof",
    elementParent: "mysocial",
    navLink: "/mysocial/socialproof",
  },
  {
    id: "reputation",
    elementTitle: "Reputation",
    elementParent: "mysocial",
    navLink: "/mysocial/reputation/",
  },
  {
    id: "business",
    elementTitle: "Business Tools",
    elementParent: null,
    navLink: "/business/tools",
  },
  {
    id: "projectManager",
    elementTitle: "Project Manager",
    elementParent: "business",
    navLink: "/business/projectmanager",
  },
  {
    id: "formBuilder",
    elementTitle: "Forms & Funnels",
    elementParent: "business",
    navLink: "/form-funnel",
  },
  {
    id: "userCourses",
    elementTitle: "My Courses",
    elementParent: "business",
    navLink: "/mycma/usercourses",
  },
  {
    id: "statistics",
    elementTitle: "Statistics",
    elementParent: null,
    navLink: "/business/statistics",
  },
  {
    id: "shop",
    elementTitle: "Shop",
    elementParent: null,
    navLink: "/ecommerce/shop",
  },
  {
    id: "finance",
    elementTitle: "Finance",
    elementParent: null,
    navLink: "/finance",
  },
  {
    id: "finance/invoice",
    elementTitle: "Finance",
    elementParent: 'finance',
    navLink: "/finance",
  },
  {
    id: "finance/income",
    elementTitle: "Finance",
    elementParent: 'finance',
    navLink: "/finance",
  },
  {
    id: "finance/expense",
    elementTitle: "Finance",
    elementParent: 'finance',
    navLink: "/finance",
  },
  {
    id: "finance/profitnloss",
    elementTitle: "Finance",
    elementParent: 'finance',
    navLink: "/finance",
  },
  {
    id: "file-manager",
    elementTitle: "File Manager",
    elementParent: null,
    navLink: "/filemanager",
  },
  {
    id: "settings",
    elementTitle: "Settings",
    elementParent: null,
    navLink: "/setting",
  },
];

module.exports = { defaultElements };