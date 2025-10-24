export const TableColumns = {
  users: [
    {
      title: "User Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Registered On",
      dataIndex: "createdAt",
      sorter: (a, b) => a.createdAt.length - b.createdAt.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ],
};
