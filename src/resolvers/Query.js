const Query = {
  resources(parent, args, { prisma }, info) {
    return prisma.query.resources(null, info)
  },
  agentExecutionList(parent, args, { prisma }, info) {
    const resource = await prisma.query.resources(null, info)

    const commandlist
  }
}

export { Query as default }