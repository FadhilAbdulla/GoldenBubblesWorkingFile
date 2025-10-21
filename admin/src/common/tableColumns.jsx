export const TableColumns = {
  users: [
    {
      title: "User Name",
      dataIndex: "username",
      sorter: (a, b) => a.username.length - b.username.length,
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
      dataIndex: "createdon",
      sorter: (a, b) => a.createdon.length - b.createdon.length,
    },
    {
      title: "Approval",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ],
};
