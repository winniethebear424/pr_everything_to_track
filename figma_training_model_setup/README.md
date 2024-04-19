#### Create Project Interface:
Start by designing an interface for creating projects.
Include input fields for project lead, classifier name, selecting or entering sample text (default options: News, Search Engine Query, Web Page Title, Software Store Query, Ad Copy), and defining category hierarchy.
Allow adding category tags one by one and support adding subcategories.
Each category should have a name, a brief definition, and support for adding examples (one per line).
Include buttons for saving and creating the project to facilitate editing and completion later.

#### Manage Projects:
Design an interface to edit the category hierarchy, including editing category names, deleting, and adding categories.

#### Manage Corpora:
Display all labeled samples in tabular form, divided into training and testing sets.
Table columns should include sample ID (MD5 hash of sample content), sample text, category tags, tag source, insertion time, and update time.
Enable filtering and sorting in the table.
Allow editing sample content and tags, ensuring that sample ID and update time change accordingly.

#### Classifier Training:
Show each category in a list format with category ID, name (including parent name for clarity), number of existing training and testing samples, current accuracy, recall, and F-score.
Include a "Continue Training" button that opens a dialog for entering training conditions, such as:
Radio options for ensuring accuracy, recall, or maximum F-score.
Advanced options like positive sample quantity (default to all samples), negative sample quantity, confusing categories and their quantities (multiple can be added), and model generation from samples.
After confirming training conditions, display a text box below the category for showing the training process.
After training, show the latest evaluation metrics, newly added positive and negative sample quantities.
Include a "Save" button under the log box to save the latest evaluation metrics and update the latest training set to the corpus.

#### Overall Evaluation:
Implement a button to start evaluating all categories using the testing set.
Display the testing process in a text box below the button.
After testing, show two tables:
Overall metrics table including macro-average and micro-average accuracy, recall, and F-score.
Individual category metrics table with category ID, name, positive and negative sample counts, accuracy, recall, F-score, and improvement suggestions.
Include a "Publish Model" button below the tables, allowing input for the model version name (default to classifier name + timestamp). Clicking this button should save the evaluation results and the model.

#### Model Deployment:
Include functionalities for "Online Preview" and "Model Download."
Online Preview: Upon selection, prompt to download a zip package.

#### Advanced Features:
Include options for fine-tuning base models and distilling base models.
Fine-tuning: Set parameters like learning rate, batch size, epochs, etc., and display logs of the fine-tuning process below. Include a button to save the fine-tuned base model. Note that fine-tuning requires retraining all category classifiers.
Distillation: Allow setting distillation parameters and selecting a Teacher model. Display logs of the distillation process below.