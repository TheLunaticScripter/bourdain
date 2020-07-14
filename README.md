# Bourdain

# Proposed Approach
1. define the Resource
2. Create arch that is a database and an api
3. create a UX allows the definition of policy (resource.policy)
4. compare defined resource.policy to the resouce.state
5. bring resource.state to resource.policy

On CentOS 7 Level 1 Server
"Ensure mounting of cramfs filesystems is disabled"

Resource
--------
id
name
policy
state

KernelModule implements Resource
-------------
id
name
policy: KernelModuleInputType
state: null

KernelModule.new(
  name: "cramfs"
  policy 
  state: KernelModuleInputType
){
  ...Resource
}

input KernelModuleInputeType {
  disabled: Boolean
  loaded: Boolean
  blacklisted: Boolean
}