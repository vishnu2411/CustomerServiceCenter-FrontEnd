Folder Structure                 
    
    ├── src/
    |   ├── components/         
    │   │   ├── ContactOptions.tsx
    │   │   ├── HoursDisplay.tsx
    │   │   └── SpecialHoursForm.tsx
    │   ├── App.tsx              
    │   ├── App.css            
    │   └── data.ts            
    ├── public/                
    │   └── index.html
    |── package.json             

Steps to run:

1. clone the repository to your local.
2. Open the terminal and give the command npm start.
3. The Application can be viewed at http://localhost:3000/

Note:
I am utilizing hard-coded JSON to mimic the API
endpoint data. It does NOT need to connect to the Spring Boot server.

The Application has the following functionalities:

o Display the currently configured hours, and special hours, if any.

o Provide a form to submit new special hours for a future date.


Final UI Screen:

![image](https://github.com/user-attachments/assets/7d0731bc-849c-454a-b703-431f0eb95ed6)


The UI has a separate form to take in new special hours as input and display in the special hours section for the day. The data is only stored for the session will be erased when we refresh the screen.

Giving new special hours:

![image](https://github.com/user-attachments/assets/c0aaf104-2af7-4ac9-86a9-d053dd9268f6)

Screen with updated special hours:

![image](https://github.com/user-attachments/assets/0e3d200d-138d-456e-8e6c-e67321445f2b)




