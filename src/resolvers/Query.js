const Query = {
  resources(parent, args, { prisma }, info) {
    return prisma.query.resources(null, info)
  }
}

export { Query as default }