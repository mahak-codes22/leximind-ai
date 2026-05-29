from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List

# Uvicorn strictly is 'app' variable ko hi dhoodh raha hai
app = FastAPI(title="LexiMind AI API")

# Dummy Database (In-Memory Python List)
documents = [
    {"id": 1, "name": "MSLA_Vendor_Agreement_2026.pdf", "status": "Indexed"},
    {"id": 2, "name": "Data_Processing_Addendum_v4.pdf", "status": "Indexed"}
]

# Request validation schema
class DocumentSchema(BaseModel):
    name: str
    status: Optional[str] = "Pending"

class PatchDocumentSchema(BaseModel):
    name: Optional[str] = None
    status: Optional[str] = None

# 1. GET ALL (Sari files dekhne ke liye)
@app.get("/api/documents")
def get_all_documents():
    return {
        "message": "Sari files successfully fetch ho gayi hain.",
        "data": documents
    }

# 2. POST (Nayi file add karne ke liye)
@app.post("/api/documents")
def create_document(doc: DocumentSchema):
    new_doc = {
        "id": len(documents) + 1,
        "name": doc.name,
        "status": doc.status
    }
    documents.append(new_doc)
    return {
        "message": "Nayi file successfully add ho gayi.",
        "inserted_data": new_doc
    }

# 3. PUT (Poori file object badalne ke liye)
@app.put("/api/documents/{doc_id}")
def update_full_document(doc_id: int, doc: DocumentSchema):
    target_doc = next((d for d in documents if d["id"] == doc_id), None)
    if not target_doc:
        raise HTTPException(status_code=404, detail="File nahi mili!")
    
    target_doc['name'] = doc.name
    target_doc['status'] = doc.status
    return {
        "message": f"Document ID {doc_id} poori tarah update ho gaya.",
        "updated_data": target_doc
    }

# 4. PATCH (Sirf ek single field update karne ke liye)
@app.patch("/api/documents/{doc_id}")
def partial_update_document(doc_id: int, doc: PatchDocumentSchema):
    target_doc = next((d for d in documents if d["id"] == doc_id), None)
    if not target_doc:
        raise HTTPException(status_code=404, detail="File nahi mili!")
    
    if doc.name is not None:
        target_doc['name'] = doc.name
    if doc.status is not None:
        target_doc['status'] = doc.status
        
    return {
        "message": f"Document ID {doc_id} partially update ho gaya.",
        "updated_data": target_doc
    }

# 5. DELETE (File remove karne ke liye)
@app.delete("/api/documents/{doc_id}")
def delete_document(doc_id: int):
    global documents
    target_doc = next((d for d in documents if d["id"] == doc_id), None)
    if not target_doc:
        raise HTTPException(status_code=404, detail="File nahi mili!")
        
    documents = [d for d in documents if d["id"] != doc_id]
    return {"message": f"Document ID {doc_id} successfully delete ho gaya."}