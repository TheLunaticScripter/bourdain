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

Copyright [2020] [John Snow, Stephen Lauck]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.