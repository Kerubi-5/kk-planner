# kk-planner

## DATABASE DESIGN
### task table 🏁
- name
- due date
- date created
- label
- progress
- priority
- notes
- array [checklists]

### checklist ✔
- checklist name
- task id
- due date
- user id

### users 👥
- email
- password
- array [tasks]

